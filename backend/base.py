import json
import os
from flask import Flask, request, jsonify, url_for, send_from_directory, redirect
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import boto3
from boto3helper import get_unique_folders, delete_items_in_folder, find_objects_with_prefix
from itsdangerous import URLSafeTimedSerializer
from flask import Flask, redirect, request
import requests
import base64
from urllib.parse import urlparse, quote_plus

api = Flask(__name__)
def load_access_token():
    try:
        with open('token.json', 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return None
# OAuth client credentials
CLIENT_ID = '213355926859-0voo1poka5un106j7807fn8iit9t9eat.apps.googleusercontent.com'
CLIENT_SECRET = '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'
TOKEN_URL = 'https://oauth2.googleapis.com/token'
SCOPE = 'https://www.googleapis.com/auth/gmail.send'  # Example scope for accessing Gmail API
ACCESS_TOKEN = None

# Redirect URI for receiving authorization code
REDIRECT_URI = 'http://localhost:5000/oauth2callback'

# Route for initiating OAuth flow
@api.route('/authorize')
def authorize():
    # Construct the authorization URL
    auth_url = (
        'https://accounts.google.com/o/oauth2/auth?'
        'client_id={}&redirect_uri={}&response_type=code&scope={}'
    ).format(CLIENT_ID, REDIRECT_URI, SCOPE)
    # Redirect the user to the authorization URL
    return redirect(auth_url)

# Route for handling OAuth callback
@api.route('/oauth2callback')
def oauth2callback():
    global ACCESS_TOKEN
    # Exchange authorization code for access token
    code = request.args.get('code')
    token_params = {
        'code': code,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'redirect_uri': REDIRECT_URI,
        'grant_type': 'authorization_code'
    }
    response = requests.post(TOKEN_URL, data=token_params)
    token_data = response.json()
    ACCESS_TOKEN = token_data['access_token']
    with open("token.json", "w") as token:
      token.write(json.dumps(token_data))
    return "Success"

def send_email(subject, body, recipient):
    global ACCESS_TOKEN

    if not ACCESS_TOKEN:
        return "Not Authorized"

    # Construct email message
    email_message = f"From: sender@example.com\r\nTo: {recipient}\r\nSubject: {subject}\r\n\r\n{body}"
    encoded_message = base64.urlsafe_b64encode(email_message.encode()).decode()
    message = {
        'raw': encoded_message
    }

    # Send email using Gmail API
    gmail_response = requests.post(
        'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
        headers={'Authorization': 'Bearer ' + ACCESS_TOKEN, 'Content-Type': 'application/json'},
        data=json.dumps(message)
    )

    # Process Gmail API response
    return gmail_response.text

if __name__ == '__main__':
    api.run(debug=True)

UPLOAD_FOLDER ='./uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'wav'}
REACT_APP_BASE_URL = "http://localhost:3000"

s3 = boto3.client('s3')
USER_BUCKET = 'user-info-0dd3917d-36b1-4a11-93e9-38bede536480'

user = {'name':'',
        'password': '',
        'type': ''}
    
CORS(api)
api.config["SECRET_KEY"] = 'some-super-secret-key'
api.config["JWT_SECRET_KEY"] = 'some-secret-key'
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
api.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
jwt = JWTManager(api)

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@api.route('/register', methods=['POST'])
def register_user():
    email = request.json.get("email", None)
    if (email in get_unique_folders(USER_BUCKET,s3=s3)):
        return {"msg": "Email already registered"}, 400
    else:
        user['name'] = request.json.get("name",None)
        user['type'] = request.json.get("accountType", None)
        user['workplace']= ''
        user['timezone']= ''
        user['zoomlink']= ''
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/details.json')
        s3.put_object(Body=json.dumps({'password':generate_password_hash(request.json.get("password", None))}), Bucket= USER_BUCKET, Key= email + '/password.json')
        response = jsonify({"msg": "registered new user"})
        access_token = create_access_token(identity=email)
        response = {"access_token":access_token}
        return response
        
@api.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if (email not in get_unique_folders(USER_BUCKET,s3)):
        return {"msg": "Email not registered"}, 401
    else:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/password.json')
        if (check_password_hash(json.loads(response['Body'].read().decode('utf-8'))['password'],password)):
            access_token = create_access_token(identity=email)
            response = {"access_token":access_token}
            return response
        else:
            response = {"msg": "Wrong password"}
            return response, 401
        
@api.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@api.route("/delete", methods=["POST"])
@jwt_required()
def delete_user():
    email = get_jwt_identity()
    if email:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/details.json')
        if (json.loads(response['Body'].read().decode('utf-8'))['type'] != 'admin'):
            delete_items_in_folder(USER_BUCKET,email+"/",s3)
            response = jsonify({"msg": "Account deletion successful"})
            unset_jwt_cookies(response)
            return response
    else:
        return {"msg": "Account not found"}, 400

@api.route("/update_password", methods=["POST"])
@jwt_required()
def update_password():
    pw_hash = generate_password_hash(request.json.get("password", None))
    email = get_jwt_identity()
    if email:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/password.json')
        user = json.loads(response['Body'].read().decode('utf-8'))
        user['password'] = pw_hash
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/password.json')
        return {"msg": "Password updated"}
    else:
        return {"msg": "User does not exist"}, 400

@api.route("/update_profile", methods=["POST"])
@jwt_required()
def update_profile():
    email = get_jwt_identity()
    if email:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/details.json')
        user = json.loads(response['Body'].read().decode('utf-8'))
        for key, value in request.json.items():
            if value:
                user[key] = value
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/details.json')
        user['email'] = email
        return {"msg": "Profile updated", "data": user}
    else:
        unset_jwt_cookies()
        return {"msg": "User does not exist"}, 400

@api.route('/update_profile_pic', methods=["POST"])
@jwt_required()
def update_profile_pic():
    email = get_jwt_identity()
    if email:
        image_file = request.files['image']
        filename = secure_filename(image_file.filename)
        extension = os.path.splitext(filename)[1]
        s3.upload_fileobj(Fileobj=image_file, Bucket= USER_BUCKET, Key= email + f'/picture{extension}')
        presigned_url = s3.generate_presigned_url('get_object',
                                                      Params={'Bucket': USER_BUCKET, 'Key': email + f'/picture{extension}'},
                                                      ExpiresIn=60)
        return {"msg": "Profile updated", "data": presigned_url}
    else:
        unset_jwt_cookies()
        return {"msg": "User does not exist"}, 400
    
@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response
    
@api.route('/profile')
@jwt_required()
def get_profile():
    email = get_jwt_identity()
    if (email not in get_unique_folders(USER_BUCKET,s3=s3)):
        unset_jwt_cookies()
        return {"msg": "Not a registered user"}, 400
    response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/details.json')
    profile = json.loads(response['Body'].read().decode('utf-8'))
    profile['email']=email
    pic_key = find_objects_with_prefix(USER_BUCKET,s3, email + '/picture')
    if pic_key:
        presigned_url = s3.generate_presigned_url('get_object',
                                                      Params={'Bucket': USER_BUCKET, 'Key': pic_key[0]},
                                                      ExpiresIn=60)  # URL expiration time in seconds
    else:
        presigned_url = ''
    return {'data': profile, 'pic':presigned_url}

@api.route('/all_users')
@jwt_required()
def get_all_users():
    users =  []
    # for user in User.query.all():
    #     users.append({'id': user.id, 'name':user.name, 'email':user.email, 'type':user.type})
    return jsonify(users)

@api.route('/upload', methods=["POST"])
@jwt_required()
def upload_file():
    if 'file' not in request.files:
        return {"error": "No file"}, 400
    file = request.files['file']
    if file.filename == '':
        return {"error": "No file name"}, 400
    if file and allowed_file(file.filename):
        filename= secure_filename(file.filename)
        
        # file.save(os.path.join(api.config['UPLOAD_FOLDER'], filename))
        # url_for('download_file',filename=filename)
        # s3.upload_file(filename, bucket_name, create_file_name(filename))
        return {"msg": "Succesfully Uploaded!"}
    return {"error": "Bad filename"}, 400

@api.route('/download/<filename>')
# @jwt_required()
def download_file(filename):
    return send_from_directory(api.config['UPLOAD_FOLDER'], filename)

@api.route('/uploaded_filelist')
@jwt_required()
def get_uploaded_files():
    file_list = []
    for filename in os.listdir(api.config['UPLOAD_FOLDER']):
        if os.path.isfile(os.path.join(api.config['UPLOAD_FOLDER'], filename)):
            file_list.append(filename)
    return jsonify({"files": file_list})

@api.route('/reset_password_link', methods=['POST'])
def request_reset_password():
    email = request.json.get("email", None)
    print(email)
    if (email in get_unique_folders(USER_BUCKET,s3=s3)):
        # Generate a token
        s = URLSafeTimedSerializer(api.config['SECRET_KEY'])
        token = s.dumps(email, salt='reset-password')
        reset_url = urlparse(REACT_APP_BASE_URL)
        reset_url = reset_url._replace(path='reset_password',query=f"token={token}")
        reset_url = reset_url.geturl()
        print(reset_url)
        msg = f"Click the link to reset your password: \n {reset_url}"
        res = send_email("Virtual Physical: Password Reset", msg, email)
        print(res)
        return {"msg": "Reset email sent"}
    return {"error": "Email not registered"}, 400

@api.route('/reset_password', methods=['POST'])
def reset_password():
    token = request.json.get("token", None)
    print(token)
    # Validate the token
    s = URLSafeTimedSerializer(api.config['SECRET_KEY'])
    try:
        email = s.loads(token, salt='reset-password', max_age=3600)
        print(email)
    except Exception as e:
        return {"error": "Email not found"}, 400
    pw_hash = generate_password_hash(request.json.get("password", None))
    if email:
        response = s3.get_object(Bucket=USER_BUCKET, Key= email + '/password.json')
        user = json.loads(response['Body'].read().decode('utf-8'))
        user['password'] = pw_hash
        s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/password.json')
        return {"msg": "Password updated"}
    else:
        return {"msg": "User does not exist"}, 400
    
# with api.app_context():
#     # Making a default account
#     user['name'] = "Administrator"
#     user['type'] = "admin"
#     user['workplace']= ''
#     user['timezone']= ''
#     user['zoomlink']= ''
#     email = 'virtualphysical23@gmail.com'
#     s3.put_object(Body=json.dumps(user), Bucket= USER_BUCKET, Key= email + '/details.json')
#     s3.put_object(Body=json.dumps({'password':generate_password_hash("Senior*Design23")}), Bucket= USER_BUCKET, Key= email + '/password.json')
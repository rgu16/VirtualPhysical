import json
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename

UPLOAD_FOLDER ='./uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'wav'}

api = Flask(__name__)
CORS(api)
api.config["SECRET_KEY"] = 'some-super-secret-key'
api.config["JWT_SECRET_KEY"] = 'some-secret-key'
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
api.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

basedir = os.path.abspath(os.path.dirname(__file__))
api.config['SQLALCHEMY_DATABASE_URI'] = \
        'sqlite:///' + os.path.join(basedir, 'database.db')

jwt = JWTManager(api)
db = SQLAlchemy(api)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    type = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'
    
def create_default_user():
    # Check if the user with the default email already exists
    existing_user = User.query.filter_by(email='virtualphysical23@gmail.com').first()
    if existing_user:
        return existing_user
    # Create a new user
    default_user = User(name='Administrator', email='virtualphysical23@gmail.com', password=generate_password_hash('test'), type = "administrator")
    # Add the new user to the database
    db.session.add(default_user)
    db.session.commit()
    return default_user

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@api.route('/register', methods=['POST'])
def register_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    pw_hash = generate_password_hash(password)
    name = request.json.get("name", None)
    account = request.json.get("accountType", None)
    if (User.query.filter_by(email=email).first()):
        return {"msg": "Email already registered"}, 400
    else:
        new_user = User(email = email,password = pw_hash,name=name,type = account)
        db.session.add(new_user)
        db.session.commit()
        response = jsonify({"msg": "registered new user"})
        access_token = create_access_token(identity=new_user.id)
        response = {"access_token":access_token}
        print(User.query.all())
        return response
        
@api.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if (user and check_password_hash(user.password,password)):
        access_token = create_access_token(identity=user.id)
        response = {"access_token":access_token}
        return response
    else:
        return {"msg": "Wrong email or password"}, 401
        
@api.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@api.route("/delete", methods=["POST"])
@jwt_required()
def delete_user():
    user = User.query.get(get_jwt_identity())
    if user:
        response = jsonify({"msg": "Account deletion successful"})
        if user.type == "administrator":
            user = User.query.get(request.json.get('user_id',None))
        else:
            unset_jwt_cookies(response)
        db.session.delete(user)
        db.session.commit()
        print(User.query.all())
        return response
    else:
        return {"msg": "Account not found"}, 400

@api.route("/update_password", methods=["POST"])
@jwt_required()
def update_password():
    password = request.json.get("password", None)
    pw_hash = generate_password_hash(password)
    user = User.query.get(get_jwt_identity())
    if user:
        user.password = pw_hash
        db.session.commit()
        return {"msg": "Password updated"}
    else:
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
    user = User.query.get(get_jwt_identity())
    response_body = {
        "name": user.name,
        "id": user.id,
        "type": user.type
    }
    return response_body

@api.route('/all_users')
@jwt_required()
def get_all_users():
    users =  []
    for user in User.query.all():
        users.append({'id': user.id, 'name':user.name, 'email':user.email, 'type':user.type})
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
        file.save(os.path.join(api.config['UPLOAD_FOLDER'], filename))
        url_for('download_file',filename=filename)
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

with api.app_context():
    db.create_all()
    create_default_user()
    print(User.query.all())
# code adapted from https://realpython.com/python-boto3-aws-s3/#creating-a-bucket
import boto3
import uuid
import json
from werkzeug.security import generate_password_hash, check_password_hash

def create_bucket_name(bucket_prefix):
    return ''.join([bucket_prefix, str(uuid.uuid4())])

def create_bucket(bucket_prefix, s3_client):
    bucket_name = create_bucket_name(bucket_prefix)
    bucket_response = s3_client.create_bucket(
        Bucket=bucket_name
    )
    return bucket_name, bucket_response

def create_file_name(file_name):
    return ''.join([str(uuid.uuid4().hex[:6]), file_name])

s3 = boto3.client('s3')
# bucket_name, response = create_bucket(bucket_prefix='user-info-', s3_client=s3)
# print(bucket_name)
# s3.upload_file('EkoRecordingPDFExport_3.pdf', bucket_name, create_file_name('EkoRecordingPDFExport_3.pdf'))
user = {'id': 0,
        'name':'Administrator',
        'password': generate_password_hash('Senior*Design23'),
        'type': 'admin'}
# s3.put_object(Body=json.dumps(user), Bucket='user-info-0dd3917d-36b1-4a11-93e9-38bede536480', Key='user0/details.json')
# s3.delete_object(Bucket='user-info-0dd3917d-36b1-4a11-93e9-38bede536480', Key='user0/details.json')
# s3.put_object(Body=json.dumps(user), Bucket='user-info-0dd3917d-36b1-4a11-93e9-38bede536480', Key='virtualphysical23@gmail.com/details.json')
response = s3.get_object(Bucket='user-info-0dd3917d-36b1-4a11-93e9-38bede536480', Key='virtualphysical23@gmail.com/details.json')
json_data_from_s3 = response['Body'].read().decode('utf-8')
retrieved_data = json.loads(json_data_from_s3)
print(retrieved_data)
print(retrieved_data['id'])


def get_unique_folders(bucket_name, prefix=''):
    # List objects within the specified prefix
    response = s3.list_objects_v2(Bucket=bucket_name, Prefix=prefix, Delimiter='/')
    # Extract unique folders (common prefixes)
    folders = [common_prefix.get('Prefix')[:-1] for common_prefix in response.get('CommonPrefixes', [])]
    return folders

# Get unique folders at the root level
root_level_folders = get_unique_folders('user-info-0dd3917d-36b1-4a11-93e9-38bede536480')

# Print the result
print('Unique folders at the root level:', root_level_folders)

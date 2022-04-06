import pymongo
user_client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db = user_client['test']

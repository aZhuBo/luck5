from pymongo import MongoClient
host = '81.70.23.51'
client = MongoClient(host, 5429)
db = client.admin
#user_client = pymongo.MongoClient(host='127.0.0.1', port=5429)
db.authenticate("root", "shangjing",mechanism='SCRAM-SHA-1') #
db = client.mongo
#db = user_client['mongo']

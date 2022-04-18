import pymongo
import random
from pymongo import MongoClient
host = '127.0.0.1'
client = MongoClient(host, 5429)
db = client.admin
#user_client = pymongo.MongoClient(host='127.0.0.1', port=5429)
db.authenticate("root", "shangjing",mechanism='SCRAM-SHA-1')
db = client.mongo
#db = user_client['mongo']
# question_client = pymongo.MongoClient(host='127.0.0.1', port=5429)
# db = question_client['test']

def questionGet(unit):
    collection = db.questions
    # 获取数据库中总题目数量
    count = collection.estimated_document_count()

    # 随机选取5个题,存到questionList里面
    questionList = []
    questionCnt = 0
    while questionCnt < 5:
        randomNum = random.randrange(count) + 1
        # 查找的随机id
        result = collection.find_one({'id': str(randomNum)})
        obunit = result['unit']
        if unit == '':
            if randomNum in questionList:
                continue
        else:
            if randomNum in questionList or obunit != unit:
                continue
        questionList.append(randomNum)
        questionCnt += 1

    # 构建题目列表
    titleList = []
    for i in range(5):
        titleList.append(collection.find_one({'id': str(questionList[i])}))

    return titleList



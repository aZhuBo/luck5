import pymongo
import random
from pymongo import MongoClient
host = '81.70.23.51'
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
    objective_unit = { "unit": unit }
    resultww = collection.find(objective_unit)
    mubiao_list=[]
    mubiao_list_id=[]
    for aa in resultww:
        mubiao_list.append(aa)

        mubiao_list_id.append(aa['id'])
    random.shuffle(mubiao_list_id)

    questionList=mubiao_list_id[:5]

    # while questionCnt < 5:
    #     randomNum = random.randrange(count) + 1
    #     # 查找的随机id
    #     result = collection.find_one({"unit": unit})
    #
    #     obunit = result['unit']
    #
    #     if unit == '':
    #         if randomNum in questionList:
    #             continue
    #     else:
    #         if randomNum in questionList or obunit != unit:
    #             continue
    #     questionList.append(randomNum)
    #     questionCnt += 1

    # 构建题目列表
    titleList = []
    for i in range(5):
        titleList.append(collection.find_one({'id': str(questionList[i])}))

    return titleList

def questionGet_sum():
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
        if randomNum in questionList :
            continue
        questionList.append(randomNum)
        questionCnt += 1
    # 构建题目列表
    titleList = []
    for i in range(5):
        titleList.append(collection.find_one({'id': str(questionList[i])}))
    return titleList
def fillGet_sum():
    collection = db.fillbound

    # 获取数据库中总题目数量
    count = collection.estimated_document_count()

    # 随机选取5个题,存到questionList里面
    questionList = []

    questionCnt = 0
    while questionCnt < 5:
        randomNum = random.randrange(count) + 1
        # 查找的随机id
        if randomNum in questionList:
            continue
        questionList.append(randomNum)
        questionCnt += 1

    # 构建题目列表
    titleList = []
    for i in range(5):
        titleList.append(collection.find_one({'id': str(questionList[i])}))

    return titleList


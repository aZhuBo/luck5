import pymongo
import random

question_client = pymongo.MongoClient(host='127.0.0.1', port=27017)
db = question_client['test']

def questionGet():
    collection = db.questions
    # 获取数据库中总题目数量
    count = collection.estimated_document_count()

    # 随机选取5个题,存到questionList里面
    questionList = []
    questionCnt = 0
    while questionCnt < 5:
        randomNum = random.randrange(count) + 1
        if randomNum in questionList :
            continue
        questionList.append(randomNum)
        questionCnt += 1

    # 构建题目列表
    titleList = []
    for i in range(5):
        titleList.append(collection.find_one({'id': str(questionList[i])}))


    print(titleList[0])

    return titleList

questionGet()



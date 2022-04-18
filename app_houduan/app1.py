from flask import Flask, request, jsonify, session
from setting import db
from Question import questionGet
from bson import ObjectId
from flask_cors import CORS
import json
import datetime

app = Flask(__name__)
# js跨域问题解决
CORS(app, supports_credentials=True)

# session密匙
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


# 登录
@app.route("/login", methods=['POST', 'GET'])
def login():
    # 将前端获取到的值转为字典
    user_info = request.form.to_dict()
    # find为找到与没找到返回bool
    find = db.mongo.find_one(user_info)
    # print(find)
    # 获取一下唯一id哈
    # _id = str(find.get("_id"))
    _id = 1
    # 传一下现在的username
    name = request.form.get("username")
    # 登录状态
    if find:
        session['username'] = request.form['username']
        return jsonify({"code": 0, "msg": "登录成功", "name": request.form.get("username"), "_id": _id, "status": 200})
    else:
        return jsonify({"code": 1, "msg": "用户名密码错误", "status": 201})


# 登出
@app.route("/login_out", methods=['POST', 'GET'])
def login_out():
    flag = request.form.get('flag')
    # session清空
    session['username'] = False
    return jsonify({"msg": "已成功退出账号！", "status": 200})


# 个人主页
@app.route("/myappindex", methods=['POST', 'GET'])
def myappindex():
    # 防报错赋初值
    username = "暂未登录"
    name = "暂未登录"
    jifeng = "暂未登录"
    duanwei = "暂未登录"
    # 找到现在登录的账户-》session
    res = {"username": session['username']}
    # 以username为主键，找到数据库里对应的那行
    find = db.mongo.find_one(res)
    # 将数据库找到的那行数据拿出来
    username = find['username']
    lixing = find['lixing']
    name = find['name']
    jifeng = int(find['jifeng'])
    duanwei = "塑料"
    if (1 <= jifeng < 20):
        duanwei = "青铜"
    if (jifeng >= 20 and jifeng < 40):
        duanwei = "白银"
    if (jifeng >= 40):
        duanwei = "黄金"
    return jsonify(
        {"status": 201, "jifen": jifeng, "name": name, "duanwei": duanwei, "username": username, "lixing": lixing})


# 注册系统
@app.route("/register", methods=['POST', 'GET'])
def register():
    # student = { 'id': '20170101', 'name': 'Jordan', 'age': 20, 'gender': 'male'}
    # result = collection.insert_one(student)
    # 获取前端请求表单
    username = request.form.get('username')
    password = request.form.get('password')
    againpassword = request.form.get('againpassword')
    name = request.form.get('name')
    lixing = request.form.get('lixing')
    print(lixing)
    # 将用户名和密码做为一个字典集，方便在数据库寻找现在用户名里有没有这个用户
    ches = {
        "username": username,
    }
    find = db.mongo.find_one(ches)
    # 如何find不为空说明该用户名已存在
    if find:
        return jsonify({"stayus": 200, "mag": "该用户名已存在!"})
    # 俩次输入的密码不相同
    if (password != againpassword):
        return jsonify({"stayus": 200, "mag": "俩次输入的密码不相同！"})
    # 符合条件存入数据库
    if (password == againpassword and find == None):
        collection = db['test']
        dier = {
            "username": username,
            "password": password,
            "name": name,
            "jifeng": "0",
            'time': {'time1': ['0', '0'], 'time2': ['0', '0'], 'time3': ['0', '0']}
        }
        db.mongo.insert_one(dier)
        return jsonify({"stayus": 200, "mag": "恭喜您，注册成功！"})


# 信息修改
@app.route("/mylist", methods=['POST', 'GET'])
def mylist():
    # 把现在登录状态呢的username拿出来
    res = {"username": session['username']}
    # find现在储存着现在登录的行数据库信息
    find = db.mongo.find_one(res)
    # 把前端表单转换为字典集
    user_info = request.form.to_dict()
    # 把前端传来的username变为一个字典
    username = {"username": request.form.get('username')}
    # 判断现在前端改的新username数据库里面有没有。有的话不能修改
    judge = db.mongo.find_one(username)
    # judge可以修改
    if (judge == None):
        db.mongo.update_one(
            {'_id': find['_id']},
            {'$set': user_info
             }
        )
        session['username'] = False
        return jsonify({"stayus": 200, "mag": "已成功修改，请重新登录！"})
    # judge吧为空不可以修改
    if judge:
        return jsonify({"stayus": 200, "mag": "此账号名已被占用，请重新填写！"})
    # db.mongo.update_one(myquery,newvalues)
    # print(db.mongo.update_one(myquery,newvalues))


# 积分处理模块
@app.route("/jifeng", methods=['POST', 'GET'])
def jifeng():
    res = {"username": session['username']}
    # 以username为主键，找到数据库里对应的那行
    find = db.mongo.find_one(res)
    muqianjifen = find['jifeng']
    now = datetime.date.today()
    jifeng = request.form.get('jifeng')
    # print(find['time'])
    maxjifen = '0'

    flag = 'time'
    falg = 0
    flag1 = 0
    for i in range(1, 4):
        falg = falg + 1
        # print(find['time'][flag+str(i)])
        if (str(now) != str(find['time'][flag + str(i)][0])):
            flag1 = 1
            find['time'][flag + str(i)][0] = str(now)
            find['time'][flag + str(i)][1] = str(jifeng)
            break
        else:
            continue

    # print(find)

    db.mongo.update_one(
        {'username': find['username']},
        {'$set': find
         }
    )
    # 今天答题已经上限了，不计入分数
    if (flag1 == 0):
        return jsonify({"stayus": 200, "mag": "今天答题已经上限了，本次不计入分数！"})
    # 今天未上限
    if (falg == 3 and flag1 == 1):
        if (int(find['time']['time3'][1]) > int(find['time']['time2'][1]) and int(find['time']['time3'][1]) > int(
                find['time']['time1'][1])):
            muqianjifen = int(muqianjifen) - max(int(find['time']['time2'][1]), int(find['time']['time1'][1])) + int(
                find['time']['time3'][1])
            db.mongo.update_one(
                {'username': find['username']},
                {'$set': {"jifeng": str(muqianjifen)}
                 }
            )
        return jsonify({"stayus": 200, "mag": "成功计入分数," + "今天已经完成3次答题任务了哦。"})
    if (falg < 3):
        if (falg == 1):
            muqianjifen = int(muqianjifen) + int(find['time']['time1'][1])
        if (falg == 2):
            if (int(find['time']['time2'][1]) > int(find['time']['time1'][1])):
                muqianjifen = int(muqianjifen) - int(find['time']['time1'][1]) + int(find['time']['time2'][1])
        db.mongo.update_one(
            {'username': find['username']},
            {'$set': {"jifeng": str(muqianjifen)}
             }
        )
        # print("+++",muqianjifen,"+++")
        return jsonify({"stayus": 200, "mag": "成功计入分数," + "今天已经完成" + str(falg) + "次答题了。"})


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


# 每日答题
@app.route("/questionBack", methods=['POST', 'GET'])
def questionBack():
    unit = ''
    unit = request.form.get('unit')  # 单元测试
    titleList = questionGet(unit)
    return json.dumps(titleList, cls=JSONEncoder)


# 存入选择题Savechoice
@app.route("/savechoice", methods=['POST', 'GET'])
def savechoice():
    # 获取前端请求表单
    collection = db.questions
    # 获取数据库中总题目数量
    count = collection.estimated_document_count()
    title = request.form.get('title')
    A = request.form.get('A')
    B = request.form.get('B')
    C = request.form.get('C')
    D = request.form.get('D')
    choice = request.form.get('choice')
    jiexi = request.form.get('jiexi')
    yyds = {
        "id": str(count + 1),
        "choice": choice,
        "title": title,
        "xuanxiang": [
            A,
            B,
            C,
            D
        ],
        "jiexi": jiexi,
        "lixing": "1",
    }
    db.questions.insert_one(yyds)
    return jsonify({"stayus": 200, "mag": "成功添加题目！"})


# 排名
@app.route("/paiming", methods=['POST', 'GET'])
def paiming():
    pass


if __name__ == '__main__':
    app.run("0.0.0.0", 5555, debug=True)
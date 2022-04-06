from flask import Flask,request,jsonify,session
from setting import db
from Question import questionGet
from flask_cors import CORS

app = Flask(__name__)
# js跨域问题解决
CORS(app, supports_credentials=True)

# session密匙
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

# 登录
@app.route("/login",methods=['POST','GET'])
def login():
    # 将前端获取到的值转为字典
    user_info=request.form.to_dict()
    #find为找到与没找到返回bool
    find=db.mongo.find_one(user_info)
    #获取一下唯一id哈
    #_id = str(find.get("_id"))
    _id=1
    #传一下现在的username
    name = request.form.get("username")
    #登录状态
    if find:
        session['username'] = request.form['username']
        return jsonify({"code": 0,"msg":"登录成功","name":request.form.get("username"),"_id":_id,"status": 200})
    else:
        return jsonify({"code":1,"msg":"用户名密码错误","status": 201})
# 登出
@app.route("/login_out",methods=['POST','GET'])
def login_out():
    flag=request.form.get('flag')
    #session清空
    session['username'] = False
    return jsonify({"msg":"已成功退出账号！","status": 200})

# 个人主页
@app.route("/myappindex",methods=['POST','GET'])
def myappindex():
    #防报错赋初值
    username="暂未登录"
    name="暂未登录"
    jifeng="暂未登录"
    duanwei="暂未登录"
    #找到现在登录的账户-》session
    res={"username":session['username']}
    # 以username为主键，找到数据库里对应的那行
    find=db.mongo.find_one(res)
    #将数据库找到的那行数据拿出来
    username=find['username']
    name=find['name']
    jifeng=int(find['jifeng'])
    duanwei="塑料"
    if (1<=jifeng<20):
        duanwei="青铜"
    if (jifeng>=20 and jifeng<40):
        duanwei="白银"
    if(jifeng>=40):
        duanwei="黄金"
    return jsonify({"status": 201,"jifen":jifeng,"name":name,"duanwei":duanwei,"username":username})

# 注册系统
@app.route("/register",methods=['POST','GET'])
def register():
    #student = { 'id': '20170101', 'name': 'Jordan', 'age': 20, 'gender': 'male'}
    # result = collection.insert_one(student)
    #获取前端请求表单
    username=request.form.get('username')
    password=request.form.get('password')
    againpassword=request.form.get('againpassword')
    name=request.form.get('name')
    #将用户名和密码做为一个字典集，方便在数据库寻找现在用户名里有没有这个用户
    ches={
        "username":username,
    }
    find=db.mongo.find_one(ches)
    # 如何find不为空说明该用户名已存在
    if find:
        return jsonify({"stayus": 200,"mag":"该用户名已存在!"})
    #俩次输入的密码不相同
    if(password!=againpassword):
        return jsonify({"stayus": 200,"mag":"俩次输入的密码不相同！"})
    #符合条件存入数据库
    if(password==againpassword and find==None):
        collection= db['test']
        dier={
            "username":username,
            "password":password,
            "name":name,
            "jifeng":"0"
        }
        db.mongo.insert(dier)
        return jsonify({"stayus": 200,"mag":"恭喜您，注册成功！"})

# 信息修改
@app.route("/mylist",methods=['POST','GET'])
def mylist():
    #把现在登录状态呢的username拿出来
    res={"username":session['username']}
    #find现在储存着现在登录的行数据库信息
    find=db.mongo.find_one(res)
    #把前端表单转换为字典集
    user_info=request.form.to_dict()
    #把前端传来的username变为一个字典
    username= {"username":request.form.get('username')}
    # 判断现在前端改的新username数据库里面有没有。有的话不能修改
    judge=db.mongo.find_one(username)
    # judge可以修改
    if(judge==None):
        db.mongo.update_one(
            {'_id':find['_id']},
            {'$set':user_info
             }
        )
        session['username'] = False
        return jsonify({"stayus":200,"mag":"已成功修改，请重新登录！"})
    # judge吧为空不可以修改
    if judge:
        return jsonify({"stayus":200,"mag":"此账号名已被占用，请重新填写！"})
    #db.mongo.update_one(myquery,newvalues)
    #print(db.mongo.update_one(myquery,newvalues))

# 答题模板
@app.route("/dati",methods=['POST','GET'])
def dati():
    pass

# 每日答题
@app.route("/questionBack",methods=['POST','GET'])
def questionBack():
    titleList = questionGet()
    return jsonify(titleList)


if __name__=='__main__':
    app.run("0.0.0.0",9527,debug=True)
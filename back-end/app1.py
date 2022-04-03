from flask import Flask,request,jsonify,session
from setting import db

app = Flask(__name__)

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

    session['username'] = False
    print(session['username'])
    return jsonify({"msg":"已成功退出账号！","status": 200})

# 个人主页
@app.route("/myappindex",methods=['POST','GET'])
def myappindex():
    print("++++++",session['username'])
    username="暂未登录"
    name="暂未登录"
    jifeng="暂未登录"
    duanwei="暂未登录"
    #找到现在登录的账户
    res={"username":session['username']}
    find=db.mongo.find_one(res)
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
    username=request.form.get('username')
    password=request.form.get('password')
    againpassword=request.form.get('againpassword')
    print(againpassword,password,username)

    ches={
        "username":username,
        "password":password,
    }
    find=db.mongo.find_one(ches)
    print(find)
    if find:
        return jsonify({"stayus": 200,"mag":"该用户名已存在!"})
    if(password!=againpassword):
        return jsonify({"stayus": 200,"mag":"俩次输入的密码不相同！"})
    if(password==againpassword and find==None):
        collection= db['test']
        dier={
            "username":username,
            "password":password,
            "name":"暂未设置",
            "jifeng":"0"
        }
        db.mongo.insert(dier)
        return jsonify({"stayus": 200,"mag":"恭喜您，注册成功！"})


if __name__=='__main__':
    app.run("0.0.0.0",9527,debug=True)
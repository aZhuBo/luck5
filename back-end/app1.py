from flask import Flask,request,jsonify,session
from setting import db

app = Flask(__name__)

app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route("/login",methods=['POST'])
def login():
    # 将前端获取到的值转为字典
    user_info=request.form.to_dict()
    #find为找到与没找到返回bool
    find=db.mongo.find_one(user_info)
    #获取一下唯一id哈
    _id = str(find.get("_id"))
    #传一下现在的username
    name = request.form.get("username")
    #登录状态
    if find:
        session['username'] = request.form['username']
        return jsonify({"code": 0,"msg":"登录成功","name":request.form.get("username"),"_id":_id,"status": 200})
    else:
        return jsonify({"code":1,"msg":"用户名密码错误","status": 201})


@app.route("/myappindex",methods=['POST'])
def myappindex():
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
if __name__=='__main__':
    app.run("0.0.0.0",9527,debug=True)
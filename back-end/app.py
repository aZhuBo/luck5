from flask import Flask,request,jsonify
from setting import db

app = Flask(__name__)

@app.route("/login",methods=["POST"])
def login():
    res = db.users.find_one(request.form.to_dict())
    _id = str(res.get("_id"))
    if res :
        return jsonify({"code": 0,"msg":"登录成功","name":request.form.get("username"),"_id":_id})
    # else:
    #     db.users.insert_one(request.form.to_dict())
    return jsonify({"code":1,"msg":"用户名密码错误"})

from bson import ObjectId
@app.route("/auto_login",methods=["POST"])
def auto_login():
    _id = request.form.get("_id")
    res = db.users.find_one({"_id":ObjectId(_id)})
    if res:
        return jsonify({"code": 0, "msg": "登录成功", "name": res.get("username"), "_id": _id})

if __name__ == '__main__':
    app.run(post=8000)

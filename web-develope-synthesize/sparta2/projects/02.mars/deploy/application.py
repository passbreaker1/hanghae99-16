from flask import Flask, render_template, request, jsonify
application = app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster1.jk8cqh7.mongodb.net/')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/mars", methods=["POST"])
def mars_post():
    name_receive = request.form['name_give']
    address_receive = request.form['address_give']
    size_receive = request.form['size_give']

    doc = {
        'name' : name_receive,
        'address' : address_receive,
        'size': size_receive
    }
    db.mars.insert_one(doc)

    return jsonify({'msg':'주문 완료!'})

@app.route("/mars", methods=["GET"])
def mars_get():
    mars_data = list(db.mars.find({},{'_id':False}))
    return jsonify({'result':mars_data})

if __name__ == '__main__':
    app.run()
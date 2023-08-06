# 몽고db와 내pc의 파이썬을 연결해주려면 pymongo와 dnspython이라는 라이브러리가 필요함.
# pip install pymongo dnspython
# --------------------------------------------
# pymongo 기본코드
# from pymongo import MongoClient
# client = MongoClient('여기에 URL 입력')  # 몽고 db의 주소, 사이트에서 가지고 올 수 있음.
# db = client.dbsparta
# -------------------------------------------
# db에 doc라고 하는 딕셔너리 저장.
# doc = {
#     'name': '영수',
#     'age': 24
# }
# db.users.insert_one(doc)
# ---------------------------------------------
# db에서 모든 데이터 가지고 오기
# all_users = list(db.users.find({조건},{'_id':False}))
# '_id':False:  _id 값은 안보겟다는 의미임.
# ---------------------------------------------
# db에서 데이터 하나만 가지고 오기
# user = db.users.find_one({})
# ---------------------------------------------
# db에 있는 데이터 업데이트 하기
# db.users.update_one({'name':'bobby'},{'$set':{'age':19}})
# name이 bobby인걸 찾아서 age를 19로 바꾸라는 의미.
# ------------------------------------------------
# db에 있는 데이터 하나 삭제하기
# db.users.delete_one({'name':'bobby'})
# name이 bobby인 데이터를 지우자!
# -------------------------------------------------

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster1.jk8cqh7.mongodb.net/')
db = client.dbsparta

# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
all_users = list(db.users.find({},{'_id':False}))

# 바꾸기 - 예시
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시
db.users.delete_one({'name':'bobby'})
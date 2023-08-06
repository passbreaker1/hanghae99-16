# db find, update 연습하기!
from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster1.jk8cqh7.mongodb.net/')
db = client.dbsparta
# quiz 1. 영화제목이 '아저씨'의 순위를 가져오기
movie = db.movies2.find_one({'title':'아저씨'})
print(movie['rank'])

# quiz 2. '하모니'와 같은 관람가의 영화 제목들을 가져오기
movie2 = db.movies2.find_one({'title':'하모니'})
# print(movie2['age'])
movies = list(db.movies2.find({'age':'12세이상관람가'},{'_id':False}))
for m in movies:
    print(m['title'])

# quiz 3. '부당거래' 영화의 관람가를 18세 이상 관람가로 만들기
db.movies2.update_one({'title':'부당거래'},{'$set':{'age':'18세이상관람가'}})
from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster1.jk8cqh7.mongodb.net/')
db = client.dbsparta
import requests
from bs4 import BeautifulSoup
URL = "https://movie.daum.net/ranking/reservation"
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(URL, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

movie = db.movies.find_one({'title':'제이홉 인 더 박스'})
target_rate = movie['rate']

movies = list(db.movies.find({'rate':target_rate},{'_id':False}))

for a in movies:
    print(a['title'])


db.movies.update_one({'title':'제이홉 인 더 박스'},{'$set':{'rate':0}})

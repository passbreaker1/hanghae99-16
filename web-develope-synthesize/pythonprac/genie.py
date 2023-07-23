import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster1.jk8cqh7.mongodb.net/')
db = client.dbsparta
URL = "https://www.genie.co.kr/chart/top200?ditc=M&rtm=N&ymd=20230101"
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(URL, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

list = soup.select('#body-content > div.newest-list > div > table > tbody > tr')

for li in list:
    rank = li.select_one('td.number').text[0:2].strip()
    title = li.select_one('td.info > a.title.ellipsis').text.strip()
    art = li.select_one('td.info > a.artist.ellipsis').text.strip()
    print(rank, title, art)
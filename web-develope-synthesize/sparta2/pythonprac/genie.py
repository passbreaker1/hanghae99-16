# 지니뮤직의 50위 까지 곡을 스크래핑
# 출력할때는 print(rank, title, artist)
# 앞에서 두 글자만 끊기! text[0:2] 사용

import requests
from bs4 import BeautifulSoup

URL = "https://www.genie.co.kr/chart/top200?ditc=M&rtm=N"
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(URL, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

lis = soup.select('#body-content > div.newest-list > div > table > tbody > tr')

for li in lis:
    title = li.select_one('.title').text.strip()
    rank = li.select_one('.number').text[0:2].strip()
    artist = li.select_one('.artist').text.strip()

    print(rank, title, artist)
# 파이썬 변수 선언
# a = 2
# b= "민국"
# print(a+b)
# ----------------------------------------------------
# 파이썬 배열 및 오브젝트
# a= ['사과', '배', '감']
# print(a[0])
# ----------------------------------------------------
# a = {'name' : '영수', 'age': 24}
# print(a['name'])
# -----------------------------------------------------
# 파이썬 함수문 (: 이후 탭이 들어가있는 코드가 해당함수의 내용임.)
# def hey():
#     print('헤이!!')
# hey()    
# ---------------------------------------------------
# 변수를 받는 함수
# def sum(a,b,c):
#     return a+b+c

# result = sum(1,2,3)
# print(result)
# ----------------------------------------------------
# 파이썬 조건문
# age=25
# if age>20:
#     print('성인입니다.')
# else:
#     print('청소년 입니다.')    
# ------------------------------------------------------
# 파이썬 반목문
# ages = [5,13,23,25,9]

# for a in ages:  # ages의 하나하나를 가져와서 a에 넣고 그 a를 밑에서 쓰자!
#     print(a)
# --------------------------------------------------------
# 반복문과 조건문 응용
# ages = [5,13,23,25,9]

# for a in ages:
#     if a > 20:
#         print('성인입니다.')
#     else:
#         print('청소년입니다.')    
# -----------------------------------------------------------

# requests 라이브러리 사용하기
# import requests 

# r = requests.get('http://spartacodingclub.shop/sparta_api/seoulair')
# rjson = r.json()

# rows = rjson['RealtimeCityAir']['row']

# for a in rows:
#     gu_name = a['MSRSTE_NM']
#     gu_mise = a['IDEX_MVL']
#     print(gu_name, gu_mise)
# ------------------------------------------------------------
import requests
from bs4 import BeautifulSoup  # pip install bs4, requests로 라이브러리 설치함.

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sparta:test@cluster1.jk8cqh7.mongodb.net/')
db = client.dbsparta

URL = "https://movie.daum.net/ranking/reservation"
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(URL, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')  # 여기까지가 크롤링 기본코드

lis = soup.select('#mainContent > div > div.box_ranking > ol > li')  # soup을 print하면 위 url의 html이 출력됨.
# 그 html안에서 ()안에 있는 태그만 갖고와서 변수에 저장한거임.

for li in lis:
    title = li.select_one('.link_txt').text  # link_txt라는 class를 가진 요소들의 text를 가져옴.
    rank = li.select_one('.rank_num').text.replace(',', '')  # ,나 공백을 제거하고 가져옴.
    rate = li.select_one('.txt_grade').text.strip() # 앞뒤로 붙은 띄어쓰기를 제거해줌.
    
    doc = {
      'rank' : rank,
      'title' : title,
      'rate' : rate
    }
    db.movies.insert_one(doc)
    # 다음 영화사이트에서 크롤링한 title, rank, rate를 db에 저장함.

    
var answer = 0;
function solution(n) {
    for(i=1; i<=n; i++){
        if(n%i == 0){
            console.log(i)
            answer +=i
        }
    }
    return answer;
}

//정수 n을 입력 받습니다.
// 1부터 n까지 모든 수를 순회하며, n을 해당 수로 나누어 나머지를 구합니다.
// 나머지가 0이라면, 해당 수는 n의 약수이므로 출력합니다.
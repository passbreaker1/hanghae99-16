var answer = 0;

function solution(n){
    let str = String(n)
    let arr = str.split("")
    
    for(i=0; i<arr.length; i++){
        answer += parseInt(arr[i])
    }

    return answer;
}
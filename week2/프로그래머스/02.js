let sum = 0;
let answer = 0;
function solution(arr){
    arr.forEach((a)=>{
        sum += a
        answer = sum / arr.length
    })
    return answer;
}

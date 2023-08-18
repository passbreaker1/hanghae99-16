function solution(n) {
    var answer = Math.sqrt(n);
    Number.isInteger(answer) ? answer = (answer+1)^2 : answer = -1
  return answer;
}
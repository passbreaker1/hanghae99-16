function solution(s) {
    var answer = 0
      s.includes('-') ? answer -= parseInt(s.slice(1)) : answer += parseInt(s)
      return answer;
  }
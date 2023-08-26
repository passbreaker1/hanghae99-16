function solution(arr, n) {
  const str = [];
  let answer = [];

  arr.forEach((a) => {
    if (!answer.includes(a)) {
      answer.push(a);
    } else {
      str.push(a);
    }
  });
  const ary = answer.filter((v) => {
    return !str.includes(v);
  });
  console.log(str, answer);
  ary.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    } else {
      return a[n].localeCompare(b[n]);
    }
  });
  return ary;
}
let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n = 2;
console.log(solution(arr, n));

// 그 다음 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하는 방법.
// 혹시 n번째 문자가 중복되면 사전순 정렬.
// 그렇지 않으면 인덱스 n의 문자를 기준으로 오름차순 정렬

// 사전 순 정렬은 localeCompare() 함수 사용.
// 자바스크립트 내장 메서드로 문자열을 비교하여 사전 순서에 따른 정렬.
// str1.localeCompare(str2) 이렇게 비교할 2개의 문자열과 써야 함.

// 위 과정을 거쳐 만들어진 str이라는 배열을 반환하면 끝.

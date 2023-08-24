function solution(arr1, arr2, signs) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      if (signs[i][j]) {
        sum.push(arr1[i][j] + arr2[i][j]);
      } else {
        sum.push(-arr1[i][j] - arr2[i][j]);
      }
    }
    answer.push(sum);
  }
  return answer;
}
let arr1 = [
  [5, 7, 1],
  [2, 3, 5],
];
let arr2 = [
  [5, 1, 6],
  [7, 5, 6],
];
let signs = [
  [true, true, false],
  [false, true, false],
];
console.log(solution(arr1, arr2, signs));

// ------------------------------------------
// console.log(arr1[0][0]+arr2[0][0])
// console.log(arr1[0][1]+arr2[0][1])
// console.log(arr1[1][0]+arr2[1][0])
// console.log(arr1[1][1]+arr2[1][1]) ....

// arr1[0] → [5,7,1]
// arr1[0][0] → 5
// 이중 반목문을 사용해서 각 요소들 더한다.
// 단, signs가 false면 - true면 + 니까 조건문 사용

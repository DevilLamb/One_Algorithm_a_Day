//Q1.

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

//A1.

function solution(x) {
  let num = String(x).split("");
  let sum = 0;
  for (i of num) {
    sum += parseInt(i);
  }

  return x % sum == 0 ? true : false;
}

//Q2.

// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

//A2.

function solution(n) {
  var answer = [];
  let arr = String(n)
    .split("")
    .sort((a, b) => b - a);
  for (i of arr) {
    answer.push(parseInt(i));
  }

  return parseInt(answer.join(""));
}

//Q3.

// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

//A2.

function solution(s) {
  return +s;
}

//이 문제는 parseInt() 로 풀었다가 다른 사람의 풀이를 보고,
//문자열에 연산자를 더하면 숫자로 파싱한다는것을 알게 되어 다르게 풀어보았다.

//Q1.

// 나머지가 1이 되는 수 찾기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다.
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
// 답이 항상 존재함은 증명될 수 있습니다.

//A1.

function solution(n) {
  ans = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      ans = i;
      return ans;
    } else {
      continue;
    }
  }
}

//Q2.
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아,
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

//A2.

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

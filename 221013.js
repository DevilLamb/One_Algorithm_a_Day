//Q1.

// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

//A1.

function solution(n) {
  let num = String(n);
  let ans = 0;
  for (let i = 0; i < num.length; i++) {
    ans += parseInt(num[i]);
  }
  return ans;
}

//이런 종류의 문제를 봤을 때 제일 빨리 생각나는 풀이방법은 for 문으로 돌리는 것이다.
//아직도 reduce를 쓰는 풀이가 익숙하지 않아 메소드는 알고 있지만 쉽게 쓰지 못한다. 연습이 필요하다.

//Q2.

// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

//A2.

function solution(n) {
  let sqrt = Math.sqrt(n);
  let ans = 0;

  sqrt % 1 === 0 ? (ans = Math.pow(sqrt + 1, 2)) : (ans = -1);

  return ans;
}

//제곱근을 알아야 풀 수 있는 문제.
//메소드 중 Math.sqrt(n) 메소드가 n의 제곱근을 반환하는 메소드라는 것을 알았더니 쉽게 풀렸다.
//문제 조건이었던 제곱근+1 의 제곱은 Math.pow 메소드로 해결하였다.

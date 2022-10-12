// Q1 . 짝수 홀수 판별

// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

// A.

function solution(num) {
  var answer = "";
  num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
  return answer;
}

// if 문으로도 푸는 문제이지만 요즘 연습중인 삼항연산자를 사용해 보았다.
// 익숙해지면 중첩해서도 사용해보려 한다.

// Q2 . 약수의 합

//정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  var answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

//위 문제와 마찬가지로 삼항연산자를 써서 풀고 싶었지만
//else의 조건이 없을 때 continue 혹은 break 를 썼을 때 모두 syntaxerror가 떴기 때문에 if문으로 풀었다.

// Q3. 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
  var answer = 0;
  for (i of arr) {
    answer += i;
  }
  return answer / arr.length;
}

//배열에서 쓸 수 있는 반복문 for of를 사용해보았다.
//다른 사람의 풀이를 보니 화살표 함수와 reduce를 써서 풀면 굉장히 깔끔하게 풀 수 있겠다.

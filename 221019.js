//Q1.

// 문제 설명
// 어떤 정수들이 있습니다.
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은
// 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

//A1.

/** 이건 reduce로 좀 더 깔끔하게 풀 수 있을것같은데, 나중에 수정예정. */
function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      sum += absolutes[i];
    } else {
      sum -= absolutes[i];
    }
  }
  return sum;
}

//Q2.

// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

//A2.

function solution(num) {
  let ans = 0;
  for (let i = 0; i < 10; i++) {
    num.includes(i) ? (ans += 0) : (ans += i);
  }
  return ans;
}

//여기까지 1페이지 다 풀었다! 딱 20문제 :)
//좀 더 깔끔한 풀이를 생각해보자!

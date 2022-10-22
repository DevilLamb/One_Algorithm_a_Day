//Q1.

// 콜라츠 추측
// 문제 설명
// 1937년 Collatz란 사람에 의해 제기된 이 추측은,
// 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다.
// 작업은 다음과 같습니다.

// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

// 예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다.
// 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요.
// 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

//A1.

function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      count += 1;
      num = num / 2;
    } else {
      count += 1;
      num = num * 3 + 1;
    }
  }
  return count >= 500 ? -1 : count;
}

//Q2.

// 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

//A2.

/**등차수열... 아쉬운 부분 : Math.abs() 로 계산할걸 그랬다. */
function solution(a, b) {
  return a === b ? a : ((a + b) * (Math.max(a, b) - Math.min(a, b) + 1)) / 2;
}

//Q3.서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

//A3.

/** 아... indexOf쓸걸....... */
function solution(seoul) {
  let index = 0;
  for (i of seoul) {
    if (i === "Kim") {
      return `김서방은 ${index}에 있다`;
    } else {
      index += 1;
    }
  }
}

/**indexOf 메소드를 쓰면 위치를 바로 찾아준다. */
function solution(seoul) {
  return seoul.indexOf("Kim");
}

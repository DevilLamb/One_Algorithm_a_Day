//Q1.

// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
//예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

//A1.
function solution(n) {
  let ans = String(n).split("").reverse();
  let answer = [];
  for (i of ans) {
    answer.push(parseInt(i));
  }
  return answer;
}

//Q2.

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

//A2.

function solution(s) {
  let str = s.split("");
  let countY = 0;
  let countP = 0;
  for (i of str) {
    if (i === "Y" || i === "y") {
      countY++;
    } else if (i === "P" || i === "p") {
      countP++;
    } else {
      continue;
    }
  }

  return countY == countP ? true : false;
}

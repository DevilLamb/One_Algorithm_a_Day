//Q1.

// 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

//A1.

/**문자열 역순 정렬을 sort로만 할까 했는데 생각해보니 reverse를 쓰면 더 간단하게 해결될 것 같아 메소드 사용.*/
function solution(s) {
  return [...s].sort().reverse().join("");
}

//Q2.

// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

//A2.

/**정규표현식으로 문자열 길이까지 체크 가능했다... 깜빡했음.*/
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return !/[a-zA-Z]/.test(s);
  } else {
    return false;
  }
}

//Q3. lv.2!

// 최댓값과 최솟값
// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
// str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

//A3.

/**2레벨 문제다. 좀 고민했는데 일단 공백 기준으로 나눠 배열로 만든 뒤 정렬해서
 * 맨 앞과 맨 뒤를 가져오고, 만약 음수일 경우 맨 뒤 숫자가 최소값이기 때문에 뒤집는 방법으로 해결했다.
 * 그런데 일단 배열로 만든 상태에서는 reduce메소드가 편리했겠다는 생각이 든다...
 *
 * 엥 그런데 Math.max와 Math.min이 문자열에도 먹힌다? 진작 이럴걸!
 */
function solution(s) {
  let a = s.split(" ").sort((a, b) => a - b);
  let ans = "";
  if (parseInt(a[a.length - 1]) < a[0]) {
    ans = `${a[a.length - 1]} ${a[0]}`;
  } else ans = `${a[0]} ${a[a.length - 1]}`;

  return ans;
}

/**Math메소드가 먹힌다는 이야기를 보고 다시 고친 방법 */

function solution(s) {
  let a = s.split(" ");

  return Math.min(...a) + " " + Math.max(...a);
}

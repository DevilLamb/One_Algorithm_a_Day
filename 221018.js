//Q1.

// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

//A1.

/**메소드 사용해볼걸.. 또 깜빡했다.
 * 문제를 풀 때 메소드를 사용해도 연산이 더 느린 경우가 있어 망설여진다.
 */
function solution(phone_number) {
  ans = "";

  for (let i = 0; i < phone_number.length; i++) {
    if (i >= phone_number.length - 4) {
      ans += `${phone_number[i]}`;
    } else {
      ans += "*";
    }
  }
  return ans;
}

//Q2.

문제 설명
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

//A2.

/**이번에는 filter가 한번에 생각나서 깔끔하게 푼듯!
 * 한가지 아쉬운 점은 무조건 ans를 리턴해야 한다고 생각했는데 마지막 리턴부분을
 * return ans.length === 0 ? [-1] : ans.sort((a, b) => a-b)
 * 라고 고쳐도 좋았을듯!
 */
function solution(arr, divisor) {
    let ans = arr.filter(arr => arr%divisor === 0)
    ans.length === 0 ? ans.push(-1) : ans.sort((a, b) => a-b)
    return ans
  }


  //Q3.

//   문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

//A3.
/**처음에는 sort((a,b)=>a-b)로 정렬하여 shift로 작은 수를 거른 후 반환하려고 했는데, 
 * 원래 배열과 달라지는 것은 문제에서 원하는 내용이 아니라 고민하다가 
 * indexOf로 위치를 찾고 그 부분을 잘라내어 반환했다.
 */
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    return arr.length === 0 ? [-1] : arr
 }
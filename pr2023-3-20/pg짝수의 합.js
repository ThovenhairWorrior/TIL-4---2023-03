// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n ; i+=2) {
        if (n >= i) {
            answer += i;
        }
    }
    return answer;
}


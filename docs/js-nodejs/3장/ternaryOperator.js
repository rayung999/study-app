// 변수를 선언합니다.
let test;
// 삼항 연산자로 해당 변수가 undefined인지 확인하고 초기화합니다.
test = typeof(test) != 'undefined' ? test : "초기화_1";
console.log(test)
// 삼항 연산자로 해당 변수가 undefined인지 확인하고 초기화합니다.
test = typeof(test) != 'undefined' ? test : "초기화_2";
console.log(test)
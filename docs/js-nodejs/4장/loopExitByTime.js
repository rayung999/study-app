// 변수를 선언합니다.
let start = new Date().getTime();
let count = 0;
// 반복을 수행합니다: 1000밀리초 * 3 = 3초
while (start + (1000 * 3) > new Date().getTime()) {
    count++;
}
// 출력합니다.
console.log(count + "만큼 반복했습니다.");
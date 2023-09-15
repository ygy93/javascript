"use strict"; // 엄격모드, 프레임워크를 사용하지 않으면 사용해주면 좋음

const i = 100;
for(let i = 0; i < 5; i++){
  i += 1;
}
console.log(i);


var person = '홍길동';
var person = '홍길순';

console.log(person);


var fruit = 'apple';
console.log(fruit);
{
  var fruit = 'orange'; // var 스코프는 전부 전역변수로 위에서 부터 차례대로 선언하면 그대로 들어감
  console.log(fruit);
}
console.log(fruit);


var test = 'test';
function varTest() {
  var test = 'test2'; // 허나 function 을 사용한 커스텀함수로는 전역, 로컬변수로 사용될 수 있음
  console.log(test);
}
console.log(test);
varTest();
/* ES5 function */
function greeting1 (name) {
  return "greeting1 : hello ~" + name;
}

const greeting2 = function (name) { // 호출한 함수안에서 처리하는것이 매개변수
  return "greeting2 : hello ~" + name;
}

var greeting3 = (name) => {
  return "greeting3 : hello ~" + name;
}

var greeting4 = () => {
  return "greeting4 : hello ~"; 
} // return 선언한것을 호출한 해당 위치에 실행

/* 함수의 명시적 호출 */
console.log(greeting1("홍길동"));
console.log(greeting2("홍길동"));
console.log(greeting3("홍길동"));
console.log(greeting4());
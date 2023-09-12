/** 객체 리터럴과 스프레드 */
let person = {
  name : 'Alberto',
  surname : 'Montalesi',
  age : 30,
};

let clone = {...person};
console.log(clone);

//person 속성 추가
person.addr = 'gangnam';

console.log(person);
console.log(clone);

console.log('-------------------------->');

/** 레스트 매개변수 */
const runners = ['Tom','Paul','Mark','Luke'];
const [first, second, ...losers] = runners;
// 나머지 변수들을 하나하나 맵핑하며 압축하며 새로운 배열을 만들어주는 것이 레스트연산자
console.log(...losers); // 안에 있는 배열을 풀어내는것이 스프레드연산자
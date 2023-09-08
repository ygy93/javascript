/** 객체 디스트럭처링 - ES6 이전 */
var person = {
  first : "hong",
  last : "gildong",
  age : 30
};

var first = person.first;
var last = person.last;
var age = person.age;

console.log(` 성 : ${first}\n 이름 : ${last}\n 나이 : ${age}`);


/** 객체 디스트럭처링 - ES6 */
var person2 = {
  first2 : "양",
  last2 : "근영",
  age2 : 20
};

const {first2, last2, age2} = person2;

console.log(` 성 : ${first2}\n 이름 : ${last2}\n 나이 : ${age2}`);
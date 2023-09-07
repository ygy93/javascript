/* const - block scope variable */
const z = "I am a constant"; // 상수
// z = "I can't be reassign"

console.log(z);

/* const - 객체 정의 */
const person = {
  name : "홍길동",
  age : 30
};

person.age = 35;
console.log(person.age);

/* "I am a constant", 35 */
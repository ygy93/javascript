// 객체 (오브젝트) 의 타입 비교 : Object.prototype.__proto__
const obj1 = new Object();
const obj2 = new Object();
console.log(obj1.__proto__ == obj2.__proto__); // 서로 메모리 구조가 같나 ? true 가 나옴

// const array1 = ['hong','kim','park']; // Array > Object
// console.log(array1.values()); // MDN 의 API

// 클래스 정의 => 여러개의 객체를 생성하는 틀

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

class Actor extends Person { // person 부모, Actor 자식
  constructor(name, age, movieNm) { // 자식 (Actor)이 생성되기 전에 부모(Person)가 생성, 반드시 Person 생성자를 맨처음 호출해야함
    super(name, age); // 키워드, 자식이 부모를 호출할 때 사용
    this.movieNm = movieNm;
  }
}

// eat() 함수를 프로토타입으로 정의
Person.prototype.eat = function() {
  console.log(`${this.name} ==> ${this.age}살 먹었어요`);
}

// act() 함수를 프로토타입으로 정의
Actor.prototype.act = function() {
  console.log(`배우 ${this.name}가 출연한 ${this.movieNm} 정말 핵노잼이에요`);
}

const gong = new Person('공유',30);
const son = new Person('손흥민',32);
const song = new Person('송혜교',40);

console.log(gong.name);
console.log(son.name);
console.log(song.name);

gong.eat();
son.eat();
song.eat();

const gong1 = new Actor('공유',30,'도깨비');
const son1 = new Actor('손흥민',32,'EPL');
const song1 = new Actor('송혜교',40,'태양의손');

gong1.act();
son1.act();
song1.act();
// iteratator protocol, iterable protocol 포함하여 생성된 내장객체는 순환 참조가 가능하다. 
// 그래서 spread연산자, for..of 사용가능, msdn api에서 prototype을 확인
// Generator 와 iteratator 는 부모자식 관계
// iteratator 와 Array, String, Map 이 부모 자식 간의 사이로 상속받아 사용할 수 있음 

const strArray = ['바나나','오렌지','복숭아'];
for(str of strArray){
  console.log(str);
}

const charArray = "hello,javascript";
for(char of charArray){
  console.log(charArray);
}

const tmap = new Map();
tmap.set(0, 'test1');
tmap.set(1, 'test2');
// [Symbol.iterator]
const tmapArray = tmap[Symbol.iterator]();
console.log(tmap.get(1));
for(const ta of tmapArray){
  console.log(ta);
}

const tObj = {
  name : '홍길동',
  age : 20,
}

const tArray = tObj[Symbol.iterator](); // 객체로 만든건 순회창조가 안된다.
for(const obj of tArray){
  console.log(obj);
}

for(const obj of tObj){
  console.log(obj);
}
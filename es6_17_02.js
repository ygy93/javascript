const foo = function* () {
  yield 'a';
  yield 'b';
  yield 'c';
};

let str = '';
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"

const foo_gen = foo();
console.log(foo_gen.next());
// foo_gen.return();
console.log(foo_gen.next());
console.log(foo_gen.next());
console.log(foo_gen.next());

// console.log(foo_gen.next().value);
// 언제 끝날지 모를때는 while 반복문을 사용

/* 
while (true) {
  const data = foo_gen.next(); // { value : a, done : false }
  if(!data.done){
    console.log(data.value);
  } else {
    break;
  }
} 
*/

/** 제너레이터 */
function* fruitList(){
  yield 'Banana';  //반환할 컨텐츠 앞에 yield 정의
  yield 'Apple';
  yield 'Orange';
}

const fruits = fruitList();

//제너레이터
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());




/** 제너레이터를 사용하여 배열 반복하기 */
const fruitList = ['바나나','사과','오렌지','멜론','복숭아'];

function* loop(arr){
  for(const item of arr){
    yield `I like to eat ${item}`;
  }
}

const fruitGenerator = loop(fruitList);
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next().value);

while (true) {
  const fruit = fruitGenerator.next();
  if(!fruitGenerator.done){
    console.log(fruit);
  } else {
    break;
  }
}
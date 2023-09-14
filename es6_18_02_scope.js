const a = 200; // 글로벌(전역) 변수
{
  const a = 100; // 로컬(멤버) 변수
  console.log(a); // 100
}
console.log(a); // 200


function sum(a, b) {
  console.log(a+b);
}
sum(1,2)


for(let i = 0; i < 10; i++){
  console.log(i);
}
console.log(i);
const a = 1;
{
  const b = 2;
  {
    const c = 3;
    console.log(a); // 출력 가능 : 스코프 내부에서 외부 참조 가능
  }
}
console.log(c); // 에러 발생 : 스코프 외부에서는 내부에 있는 것을 참조할 수 없음
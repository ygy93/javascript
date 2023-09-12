function a (second) {
  return new Promise((resolve, reject) => {
    // 1. 시간체크 --> if
    if(!second || second < 0) {
      reject(new Error('second 값이 0 보다 작음')); // 에러 객체를 생성해서 던져주는 함수 throw
    }

    // 2. setTimeout 호출
    setTimeout(() => {
      resolve();
    }, second)

    // setTimeout(resovle, second); 으로도 써도됨
  })
}

a(1000)
  .then(() => console.log('타이머 종료!!'))
  .catch(console.error)
  .finally(() => console.log('프로그램 종료!!'))

/* 
try {
  a(() => { // throw 로 던진 함수는 함수를 호출한곳에서 받음
    console.log('타이머 종료!!');
  }, 1000); // 콘솔로그에 타이머종료 를 출력함수생성
} catch(error) {
  console.log('에러발생 : second 값이 0 보다 작음');
}
*/
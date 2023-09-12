// 주어진 second (초) 가 지나면 callback 함수를 호출
// 단, second 가 0 보다 작으면 에러 출력
// 콘솔로그에 '타이머 종료!!' 를 출력

function a (callback, second) {
  // 1. 시간체크 --> if
  if(!second || second < 0) {
    throw new Error('second 값이 0 보다 작음') // 에러 객체를 생성해서 던져주는 함수 throw
    // 비슷한 함수로 try, catch 가 있음
  }

  // 2. setTimeout 호출
  setTimeout(callback, second);
}

try {
  a(() => { // throw 로 던진 함수는 함수를 호출한곳에서 받음
    console.log('타이머 종료!!');
  }, 1000); // 콘솔로그에 타이머종료 를 출력함수생성
} catch(error) {
  console.log('에러발생 : second 값이 0 보다 작음');
}

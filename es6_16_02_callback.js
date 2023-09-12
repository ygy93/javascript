function execute (callback, seconds) {
  console.log('1');

  setTimeout(callback, seconds);
  // ajax 에 먼저 저장되고나서 호출되기 때문에 아래 콘솔로그가 먼저 호출됨

  console.log('3');
}

execute(() => {
  console.log('2');
}, 500);
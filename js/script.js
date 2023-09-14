function form_check(e) {
  let userName = document.querySelector('#userName'); // 추후 focus 도 사용하기에 뒤에 밸류를 넣지 않고 객체형태로 변수명 줌
  let userId = document.querySelector('#userId');
  let pw = document.querySelector('#pw');
  let pwCheck = document.querySelector('#pwCheck');
  let birth = document.querySelector('#birth');
  let email_sel = document.querySelector('#email_sel'); // 셀렉트
  let email_dns = document.querySelector('#email_dns');
  let tel = document.querySelector('#telNumber');
  let checkBox = document.querySelector('#check');

  function textColor () {
    err_text.style.color = 'red';
  }

  /* 이름 적었는가 -------------------------------------- */
  if(userName.value == ''){ // 위에서 밸류로 가져오지 않고 빈 객체를 가져왔기에 변수 뒤에 밸류값을 넣어줘야함
    var err_text = document.querySelector('.err_name');
    err_text.textContent = '* 이름을 입력해주세요';
    textColor();
    userName.focus();

    return false;
  } else {
    document.querySelector('.err_name').textContent = '';
  }

  /* id 적었는가 -------------------------------------- */
  let userId_length = userId.value.length;

  if(userId_length == ''){
    var err_text = document.querySelector('.err_id');
    err_text.textContent = '* 아이디를 입력해주세요';
    textColor();
    userId.focus();

    return false;
  }
  /* id 4 ~ 12글자 -------------------------------------- */
  else if(userId_length < 4 || userId_length > 12 ){
    var err_text = document.querySelector('.err_id');
    err_text.textContent = '* 4~12글자까지만 입력 해주세요.';
    textColor();
    userId.focus();

    return false;
  } else {
    document.querySelector('.err_id').textContent = '';
  }

  /* pw 적었는가 -------------------------------------- */
  let pwLength = pw.value.length;

  if(pwLength == ''){
    var err_text = document.querySelector('.err_pw');
    err_text.textContent = '* 비밀번호를 입력해주세요';
    textColor();
    pw.focus();

    return false;
  }

  /* pw 4 ~ 12글자 -------------------------------------- */
  else if(pwLength < 4 || pwLength > 12){
    var err_text = document.querySelector('.err_pw');
    err_text.textContent = '* 4~12글자까지만 입력 해주세요.';
    textColor();
    pw.focus();

    return false;
  } else {
    document.querySelector('.err_pw').textContent = '';
  }

  /* pw 동일한지 확인 -------------------------------------- */
  let pwChecking = pwCheck.value;

  if(pwChecking !== pw.value){
    var err_text = document.querySelector('.err_pwCheck');
    err_text.textContent = '* 입력한 비밀번호 동일하지 않습니다.';
    textColor();
    pwCheck.focus();

    return false;
  } else {
    document.querySelector('.err_pwCheck').textContent = '';
  }

  /* 생년월일 -------------------------------------- */
  let birth_length = birth.value.length;

  if(birth_length < 8 || birth_length > 8){
    var err_text = document.querySelector('.err_birth');
    err_text.textContent = '* 생년월일 입력 양식과 다릅니다.';
    textColor();
    birth.focus();

    return false;
  } else {
    document.querySelector('.err_birth').textContent = '';
  }

  /* 이메일 셀렉트 밸류값 가져와서 뒤에 input 채우기 -------------------------------------- */
  if(email_dns.value == '' && email_sel.value == 'self'){
    alert('이메일 주소를 입력해주세요!!');
    textColor();
    email_dns.focus();

    return false;
  }

  /* 전화번호 -------------------------------------- */
  if((tel.value).includes('-')){
    var err_text = document.querySelector('.err_tel');
    err_text.textContent = '* - 없이 입력해주세요.';
    textColor();
    tel.focus();

    return false;
  } else {
    document.querySelector('.err_tel').textContent = '';
  }

  /* 동의 체크 -------------------------------------- */
  if(!checkBox.checked){
    var err_text = document.querySelector('.err_check');
    err_text.textContent = '* 반드시 체크해 주세요.';
    textColor();
    checkBox.focus();
    alert('반드시 약관 동의에 체크해 주세요!!');

    return false;
  }

  join_form.submit(); // 서버전송
  
}

/* 이메일 직접입력, 네이버 등등 바로 적용 */
function email_check() {
  let email_sel = document.querySelector('#email_sel');
  let email_dns = document.querySelector('#email_dns');

  if(email_sel.value == 'self'){
    email_dns.value == '';
  } else {
    email_dns.value = email_sel.value;
  }
}

/* 우편번호 검색 카카오 api 사용 */
function post_check() {
  new daum.Postcode({
    oncomplete: function(data) {
      // 해당 코드 안에서 실행되는 것이므로 데이터를 변수로 재설정하면 적용이 안됨
      // ex) let addr = data.zonecode; 등으로 변수를 설정해서 넣으면 적용 x
      let postNum = document.querySelector('#postCode'); // 우편번호
      let addr1 = document.querySelector('#addr'); // 주소
      let addr2 = document.querySelector('#addr2'); // 도로명주소

      postNum.value = data.zonecode;
      addr1.value = data.address;
      addr2.value = data.roadAddress;
      
    }
  }).open();
}

document.addEventListener('DOMContentLoaded', () => {
  // 회원가입 버튼 클릭 이벤트 호출

  /* btnJoin.addEventListener('click', () => {
    form_check();
  }) */

  btnJoin.addEventListener('click', form_check);
  email_sel.addEventListener('change', email_check);
  addrSearch.addEventListener('click', post_check);

})
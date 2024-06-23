const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@'
};


// /*

// 1. email 정규표현식을 사용한 validation
// 2. pw 정규표현식을 사용한 validation
// 3. 상태 변수 관리
// 4. 로그인 버튼을 클릭시 조건처리

// */

// 이메일 정규표현식을 사용한 validation
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// 비밀번호 정규표현식을 사용한 validation
function validatePassword(password) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(password));
}

// 로그인 폼 요소 변수
const form = document.querySelector('.login-form');
const emailInput = document.querySelector('#userEmail');
const pwdInput = document.querySelector('#userPassword');
const emailError = document.querySelector('#userEmailError');
const pwdError = document.querySelector('#userPasswordError');


// 폼 이벤트
form.addEventListener('submit', function(event) {
  event.preventDefault(); // 폼의 기본 동작(제출) 방지.

  // 존재할 수 있는 공백 제거
  let email = emailInput.value.trim();
  let password = pwdInput.value.trim();

  // 이메일 유효성 검사
  if (!validateEmail(email)) {
    showError(emailInput, emailError, '아이디는 이메일 형식으로 입력해 주세요.');
  } else {
    hideError(emailInput, emailError);
  }

  // 비밀번호 유효성 검사
  if (!validatePassword(password)) {
    showError(pwdInput, pwdError, '비밀번호는 특수문자 포함 6자리 이상 입력해 주세요.');
  } else {
    hideError(pwdInput, pwdError);
  }

  // 로그인 정보 확인
  if (validateEmail(email) && validatePassword(password) && email === user.id && password === user.pw) {
    window.location.href = 'welcome.html'; // 로그인 성공 시 해당 페이지로 이동
  }
});

// 입력 필드 유효성 검사 이벤트
emailInput.addEventListener('input', function() {
  let email = emailInput.value.trim();
  if (!validateEmail(email)) {
    showError(emailInput, emailError, '아이디는 이메일 형식으로 입력해 주세요.');
  } else {
    hideError(emailInput, emailError);
  }
});

pwdInput.addEventListener('input', function() {
  let password = pwdInput.value.trim();
  if (!validatePassword(password)) {
    showError(pwdInput, pwdError, '비밀번호는 특수문자 포함 6자리 이상 입력해 주세요.');
  } else {
    hideError(pwdInput, pwdError);
  }
});


// 오류 메시지 표시 함수
function showError(input, errorTxt, message) {
  input.classList.add('is--invalid');
  errorTxt.textContent = message;
  errorTxt.style.display = 'block';
}


// 오류 메시지 숨김 함수
function hideError(input, errorTxt) {
  input.classList.remove('is--invalid');
  errorTxt.textContent = '';
  errorTxt.style.display = 'none';
}

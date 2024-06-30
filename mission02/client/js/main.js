
// index.html 파일의 script type을 'module'로 변경 후 모듈 적용 
import { data, setBgColor, setImage, setNameText } from './index.js';

/* 


1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리


*/


// 요소 변수
const background = document.querySelector('body');
const navigation = document.querySelector('.nav');
const targetImg = document.querySelector('.visual img');
const charName = document.querySelector('.nickName');


// 클릭 이벤트 함수
function handleClick(e) {

  const target = e.target.closest('li');

  if (!target) return;


  const index = target.dataset.index - 1;      // 배열의 인덱스는 0부터 시작하므로

  const { color, name, alt } = data[index];    // 데이터 배열 data에서 해당 인덱스에 있는 객체를 추출해서 각각 할당


  // 배경색, 이미지, 이름 변경 함수 호출
  setBgColor(background, color[0], color[1]);

  setImage(targetImg, name, alt);

  setNameText(charName, name);


  [...navigation.children].forEach((li) => {   // 모든 li 요소에서 is-active 클래스 제거
    li.classList.remove('is-active');
  });

  target.classList.add('is-active');   // 현재 선택된 li 요소에 is-active 클래스 추가
} 

navigation.addEventListener('click', handleClick);


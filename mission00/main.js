/* 

1. 문제 설명
문제 : 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.

설명 : 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 
존재하지 않으면 에러를 발생시키는 함수를 작성하세요.

*/


/* 테스트 

const teamKorea = {
  captain : 'sonny',
  defender : 'kim-min-jae',
  midfielder : 'lee-kang-in'
}  
  
*/
  
function getValueAtObject(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    throw Error('해당 키가 존재하지 않습니다.');
  }
}

// getValueAtObject(teamKorea, 'captain');
// getValueAtObject(teamKorea, 'striker');



/* 

2. 문제 설명
문제 : 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.

설명 : 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 
그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.

*/


/* 테스트 

const band = ['vocal', 'guitar', 'bass', 'synthesizer', 'drum'];  

*/

function getNumberAtArray(arr, index) {
  if (!Array.isArray(arr)) {
    throw Error('배열이 아닙니다.');
  } else if (index < 0 || arr.length <= index ) {
    throw Error('해당 인덱스가 존재하지 않습니다.');
  } else {
    return arr[index];
  }
}

// getNumberAtArray(band, 0);
// getNumberAtArray('band', 2);
// getNumberAtArray(band, 7);

/** ES5 및 이전 버전에서의 배열 복사 */
const veggie = ['tomato','cucumber','beans'];
const newVeggie = [].concat(veggie); //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie.push('peas');
console.log(veggie);     //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie);  //[ 'tomato', 'cucumber', 'beans' ]

/** ES6 스프레드 문법으로 배열 복사 */
const veggie2 = ['tomato','cucumber','beans'];
const newVeggie2 = [...veggie2]; //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie2.push('peas');
console.log('---------------------------------------------->');
console.log(veggie2);     //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie2);  //[ 'tomato', 'cucumber', 'beans' ]
/** 심벌의 고유성 */
const me = Symbol("Alberto"); // 첫글자가 대문자면 클래스
console.log(me); 

/** 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까? */
const clone = Symbol("Alberto");
console.log(clone);

//심벌 비교
console.log(me == clone);   //false 값비교
console.log(me === clone);  //false 타입비교

const symObj = Object(me);
console.log(symObj);

/* // Object 와 Symbol 은 부모 자식 관계이므로 가능
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object" 
*/

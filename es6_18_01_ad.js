/* 

1. JavaScript : ES6 ( 'ECMA Script 6' )

  1 ) Basic ( 문법 ) 
  - let, const, function, class, Iterator...

  2 ) Advance (내부구현)
  - Scope, Hoisting, Closer, Prototype...


2. Scope 란?
- 식별자 ( 변수, 함수, 클래스, ... ) 의 유효한 범위, 영역
- 변수를 참조할 수 있는 유효한 범위, 영역

스코프 정의 - { } (블럭) 단위로 정의됨
블럭 : 블럭 ({}), 함수 (function a() {}), 제어문 (for {}, if {})..
블럭 내부에서 외부의 변수를 참조 가능,
블럭 외부에서 내부의 변수는 참조할 수 없음

블럭을 이용하여 식별자의 scope 를 정의
--> 이름 충돌 방지, 메모리 절약

* 식별자 (변수)는 최대한 필요한 블럭에서 정의해서 사용하도록 한다

const a = 200; // 글로벌(전역) 변수
{
  const a = 100; // 로컬(멤버) 변수
  console.log(a); // 100
}
console.log(a); // 200


3. 가비지 컬렉터 (Gabage Collector)
- C 언어 : 개발자가 메모리 선언, 할당, 데이터처리, 메모리 반환 (삭제)
- JAVA, C#, JS, GO : 메모리 관리해주는 GC (Gabage Collector) 가짐


4. 실행 컨텍스트 (Execution COntext)
- 실행 순서와 스코프를 기억하고 있음
- 실행 컨텍스트는 스코프 정보를 가지고 있는
  렉시컬 환경 오브젝트 (Lexical Environment Object) 를 생성하여
  관리하며 렉시컬 환경 오브젝트는 각각의 스코프 체이닝으로 연결됨
- 코드 맨 안쪽의 블럭이 맨 먼저 생성됨

[스코프란?]
식별자(변수, 함수, ..) 의 유효한 범위를 의미하며, 블럭 단위로 정의됩니다.
블럭 안에서 정의된 식별자는 블럭이 종료되묜 GC 의 대상이 됩니다.
스코프 외부에서 스코프 내부의 식별자는 참조가 불가능 하지만,
내부에서 외부 스코프의 식별자는 참조가 가능합니다.
참조가 가능한 이유는 실행 컨텍스트에 있는 렉시컬 환경 오브젝트가 스코프 단위의 정보를 기억하고 있으며 
맨 안쪽에 생성되는 스코프부터 체이닝을 이용하여 연결되어 있기 때문입니다.
이렇게 생성된 LEO 를 통해 스코프의 참조가 가능해 집니다.
그래서, 스코프를 사용할 때 메모리 절약과 성능을 고려한다면
식별자 선언과 사용은 필요한 블럭에서 정의하고 호출하도록 하는 것이 좋다고 생각합니다.


5. 호이스팅 (Hoisting)
- 자바스크립트 엔진 (인터프리터) 이 코드를 실행하기 전에 변수, 함수, 클래스 등을 최상단으로 끌어올리는 작업
- ES6 이전에는 변수, 클래스는 호이스팅 작업 시 선언과 초기화가 함께 진행되었으나, ES6 이후부터는 선언만 가능해짐
- ES6 기준으로 let, const 키워드가 등장함
- var 스코프는 되도록 사용x, let, const 를 사용하여 명확한 프로그래밍 가능


6. var 특징
- 다른 언어와 코딩 방식 (변수 할당 등) 의 차이로 디버깅이 어려움
- 코드의 가독성과 유지보수 측면에서 좋지 않음
  1) 변수 선언 시 키워드가 없어도 사용 가능하므로, 선언인지 재할당인지 구분이 어려움
    name = 'hong'; --> var name = 'hong';

  2) 중복 선언이 가능함
    var person = '홍길동';
    var person = '홍길순';

    console.log(person);

  3) 블럭 단위 스코프가 안됨
    var fruit = 'apple';
    console.log(fruit);
    {
      var fruit = 'orange'; // var 스코프는 전부 전역변수로 위에서 부터 차례대로 선언하면 그대로 들어감
      console.log(fruit);
    }
    console.log(fruit);

  4) function 함수레벨 스코프는 지원 됨
    var test = 'test';
    function varTest() {
      var test = 'test2'; // 허나 function 을 사용한 커스텀함수로는 전역, 로컬변수로 사용될 수 있음
      console.log(test);
    }
    console.log(test);
    varTest();


7. 프로토타입 (Prototype)
  1) an original or first model of something from which other forms are copied or developed
  2) someone or something that has the typical qualities of a particular group, kind, etc.
  3) a first or early example that is used as a model for what comes later

  - 자바스크립트에서 객체지향 적으로 프로그래밍을 하기 위해 프로토타입이 제공되며,
  공통적인 특징, 기능, 상태 등을 저장하여 필요한 객체에게 상속을 통해 적용할 수 있다.
  - 최상위 프로토타입 (클래스) 은 Object 로 생성되는 모든 객체는 상속을 받아 구현된다.

  strArray = []; // new Array();

  class person {
    constructor() {
      this.name = 'hong';
      this.age = 20;
    }
  }
  자바스크립트에서 존재하는 최상위 프로토타입은 Object (객체)


  class Parent{
      constructor() {
          this.name = '부모';
      }
  }

  class Person extends Parent {
      constructor() {
          super();
          this.name = 'hong';
          this.age = 20;
      }
  }

  hong = new Person();
  console.log(hong.name);
  결과 : hong


8. 클로저 (Closure)
- 함수에서 사용되는 중첩 함수 정의로 생성되는 블럭 스코프를 통해 내부의 함수 스코프에서
  외부의 함수 스코프에 접근 가능하도록 허용하는 것을 의미함

  function outer() {
    const a = 1;
    function inner() {
      console.log(a);
    }
    inner();
  }
  outer();

*/
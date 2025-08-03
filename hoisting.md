# 호이스팅
선언한 변수 및 함수가 단순히 코드 최상단으로 올라오는 것을 의미한다.
var, let, const 모두 호이스팅 방법이 다를 뿐 호이스팅이 이루어진다. 

- Hoisting : 끌어올리다, 게양하다.

호이스팅이 발생하는 원인은 변수 생성(Instantiation)과 초기화(Initialization)의 작업이 분리되어 진행되기 때문이다.


> var 호이스팅 방식 : 메모리에 변수 선언, undefined값으로 초기화하여 접근 가능 
> let/const 호이스팅 방식 : 메모리에 변수 선언 단 TDZ에 있어 접근 불가


----

## 변수 호이스팅
- JS에서 변수를 선언할 때 const, let, var 키워드를 사용한다.

### var 키워드
```js
console.log(x); // undefined (에러가 아님!) 초기화
var x = 5;
console.log(x); // 5

// 위 코드는 실제로는 다음과 같이 동작합니다:
var x; // undefined로 초기화
console.log(x); // undefined
x = 5;
console.log(x); // 5
```
최상단에 아무런 입력값이 없었는데 x 는 `undefined`로 초기화 된다. 이 것이 호이스팅 때문에 가능한 것이다. 

이러한 특징은 코드의 가독성을 해치거나, 예상치 못한 동작을 일으키기도 한다.

이를 방지하기 위해 ES6에 let/const 키워드가 추가되었다.


### let, const 키워드

```js
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;
```
var 키워드의 논리라면 첫번째 줄 `console.log(y)`는 호이스팅에 의해 `undefined`로 초기화되어야 한다.
하지만 let/const 키워드를 사용했을 때 초기화되지 않는다.
이런 현상을 임시사각지대, TDZ(Temporal Dead Zone)라고 한다.

### 임시사각지대, TDZ(Temporal Dead Zone)

임시사각지대라고도 부르며 변수가 선언되기 전의 코드 영역을 말한다.

> 변수가 선언되었지만 아직 초기화가 되지 않은 상태, 즉, **선언만 되고 아직 초기화 되지 않은 변수가 머무는 공간**이다.

이 공간에 있는 변수를 참조하려고 하면 ReferenceError를 마주할 것이다.

TDZ의 주요 목적은 프로그래밍 오류를 줄이는데 있다.

```js
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;
console.log(z) // 20
```

`const z = 20`처럼 변수가 선언되고 초기화되면 이 단계에서는 TDZ(Temporal Dead Zone)를 벗어나고, 값이 할당되어 접근 및 사용이 가능하다.

------

## 함수 호이스팅
자바스크립트 함수를 정의하는 문법으로 함수 표현식과 함수 선언식 두 가지가 있다.
```js
// 함수 선언식
function add(x, y) {
  return x + y;
}

// 함수 표현식
const add = function(x, y) {
  return x + y;
};
```

둘은 함수를 만드는데 기본적으로 동일한 기능을 수행하지만, 함수 표현식은 함수를 변수에 할당하므로 유연성이 높다.
그리고 **호이스팅이 강제적으로 되지 않아** 개발자로 하여금 혼동을 주지 않는다. 

### 함수 표현식 권장 이유
```js
console.log(add(2,3))
function add(x,y){
  return x+y
}
console.log(add(3,4))

// >> 5
// >> 7
```


`add(2,3)`은 아직 `function add()` 함수가 정의되지 않았음에도 불구하고 `add()`함수를 호출하는 것이 가능하다. 왜냐하면 코드 해석 단계에서 호이스팅이 일어나 `function add()`가 상단으로 끌어올려졌기 때문이다. 

이러한 구조는 함수를 선언하기 전에 함수를 선언한 것이기 때문에 구조를 엉성하게 만들 수 있다.
그래서 함수 표현식만을 사용하라고 권장하는 것이다.

## 참고
[TDZ](https://ccomccomhan.tistory.com/288#google_vignette)

[호이스팅이란](https://ccomccomhan.tistory.com/290)
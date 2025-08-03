## 퀴즈: 호이스팅, 스코프체인
호이스팅과 스코프 체인을 공부했다면 아래의 퀴즈를 풀어보자.
아래의 값들은 어떻게 나올까? 

```js
var a = 1;

var outer = function () {
  var inner = function () {
    console.log("inner:", a);
    var a = 3;
  };
  inner();
  console.log("outer:",a);
};
outer();
console.log("global:",a);
```

정답은 아래와 같다.

```js
// inner: undefined
// index.js:41 outer: 1
// index.js:41 global: 1
```

`inner`의 `a`가 `undefined`를 출력하는 이유는 **호이스팅(Hoisting)**때문이다. 
스코프체인이 작동하기 전에, JavaScript 엔진은 코드를 실행하기 전에 스코프(함수)를 먼저 스캔합니다. 이 스캔 과정에서 `var`로 선언된 변수를 찾아내고, 해당 스코프의 맨 위로 끌어올리는 것처럼 동작한다.

```js
var inner = function(){
  console.log(a) // undefined
  var a = 3
}
```

위 예제처럼 inner함수 내에 a라는 변수가 이미 선언되어 존재하지만, 아직 3이라는 값이 할당하기 전이므로 기본값인 `undefined`를 출력하게 된다.

그럼 `var`가 아니라 `let`을 사용하면 어떤 출력을 가질까?

```js
let a = 1;

let outer = function () {
  let inner = function () {
    console.log("inner:", a); 
    let a = 3;
  };
  inner();
  console.log("outer:",a); 
};
outer();
console.log("global:",a);
```

답은 아래와 같다.

```js
// inner:  ReferenceError: Cannot access 'a' before initialization
// index.js:41 outer: 1
// index.js:41 global: 1
```

`var`와 다르게 `let/const` 는 변수 선언만 호이스팅되고, 초기화 과정은 일어나지 않는다. 
변수가 호이스팅되더라도, 실제 변수 선언 코드까지는 접근할 수 없는 **일시적 사각지대, TDZ(Temporal Dead Zone)**라는 영역에 있게 된다. 따라서 변수에 접근하려고 하면 `ReferenceError`가 발생한다.
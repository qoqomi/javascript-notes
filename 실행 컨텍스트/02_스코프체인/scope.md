# 스코프

## 스코프란 
자바스크립트에서는 **변수와 함수가 접근 가능한 범위**를 의미한다. 
이는 코드의 특정 영역에서 어떤 변수들이 사용할 수 있는지를 정의한다.

스코프는 크게 **글로벌 스코프**, **함수 스코프**, **블록 레벨 스코프**, **체인 스코프**로 나눌 수 있다.

## 글로벌 스코프

글로벌 스코프에 선언된 변수는 어디서든 접근 가능하다.(전역 변수)

```js
var name = "호빵맨"

function globalScope(){
    console.log(name) // 호빵맨
}
```

## 함수 레벨 스코프
함수 내에서 선언된 변수는 해당 함수 내에서만 접근 가능하다.
외부에서 접근할 수 없다. 
```js
function scope(){
    var name = "호빵맨"
    console.log(name)
}
scope()
console.log(name) // 
```

## 블록 레벨 스코프(block level scope)
ES6부터 등장한 let과 const를 사용하여 선언된 변수는 블록 레벨 스코프를 가진다.
```js
function sayHi(name) {
  if (name) {
    let greet = `Hi, ${name}!`;
  }
  console.log(greet);
}

sayHi('Wonkook');
```
함수 레벨 스코프와 달리 조건문을 포함한 모든 실행 블럭을 스코프로 간주하기 때문에 greet을 참조할 수 없게 된다.
스코프는 필요한 영역이 한정하여 유효 범위가 좁을수록 좋다.


## 스코프 체인(Scope Chain)
자바스크립트가 변수를 찾을 때 안쪽 스코프에서 바깥쪽 스코프로 차례대로 찾아 올라가는 구조를 말한다. 
즉 내부 함수가 외부 스코프를 변수에 접근할 수 있는 이유가 바로 스코프 체인 덕분이다.

```js
   let a = 1;
function outer() {
	let b = 2;
    
    function inner() {
    let c = 3;
    
    console.log(a); // 전역에서 찾음
    console.log(b); // outer에서 찾음
    console.log(c); // inner 에서 찾음
    }
    inner();
}
outer();
```

스코프 체인의 실제 흐름은 아래와 같다. 
1. c -> 자기 스코프인 inner() 안에 있어서 바로 찾는다.
2. b -> inner() 함수에 존재하지 않아 outer()안에 있으므로 그 곳에서 찾는다.
3. c -> inner(),outer()에도 존재하지 않아 전역 스코프에서 찾는다.

> 자바스크립트는 가장 가까운 스코프부터 바깥쪽으로 하나씩 찾아 올라가며 변수의 값을 찾는 구조를 가진다.



## 참고 문서
[스코프 체인 정리](https://nicekhj.tistory.com/89)
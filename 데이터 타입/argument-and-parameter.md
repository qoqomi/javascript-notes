
## Parameter와 Argument의 차이

Parameter는 함수를 정의할 때 사용되는 변수(매개변수)를 의미한다. 
> "매개"란 두 대상 사이에서 어떤 관계를 맺어주는 역할을 한다는 뜻이다.

Argument는 실제로 함수를 호출될 때 넘기는 변수값을 의미한다. 

```js
function plus (num1, num2) {
	return num1 + num2;
}
// num1과 num2는 parameter이다.

plus(10, 20);
// 10과 20은 argument이다.  
```

## 인자와 인수
그럼 Parameter와 Argument는 뭐라고 부를까?
Parameter는 MDN에서 이렇게 정의한다. 
> 매개변수(Parameter)
매개 변수는 함수에 전달되는 이름이 있는 변수입니다. 매개변수를 의미하는 변수는 인자를 함수로 가져오는데 사용됩니다.

Argument는 MDN에서 아래와 같이 정의한다. 
> Argument
**인수**란 함수에 입력으로 간주되는(원시적인 또는 객체의)값입니다. 

공식문서에서는 Argument는 인수라고 정의한다. 

하지만 Parameter의 **인자를 함수로 가져오는데에 사용된다.** 라는 말은 아직까지 이해가 가지 않는다. 심지어 인자를 클릭하면 Argument페이지로 이동된다. 

## 인자..인수.. 같은 말이 아닌 것 같은데 명확하지 않다.
나와 비슷한 생각을 가진 블로그에는 명확한 답변이 나와있었다. 
> 인수(引數)와 인자(引子)는 함수에게 넘겨주기 위해서 끌어오는(引) 값(數;子)이라는 의미로 **같은 말**이다.
매개변수와 인자(인수)는 다른 말이다. 착각하면 안 된다.

```js 
function add (a, b) { 
// argument값을 받기 위해 선언된 변수 a와 b는 parameter라 부른다. 인자를 받기 위한 매개체로써 선언된 변수라는 의미이다.
 return a + b ;
}

add(1, 2) // 여기서 넘겨진 값은 '인자(인수 ; argument)'라 부른다.
```
```js
function add(a,b){
  return a+b
}
const x = 1
const y = 2
const z = add(x,y)

console.log(z) // 5
```

위의 코드를 설명한 부분이 있다. 
add를 호출할 때 인자를 상수가 아닌 다른 변수 x,y의 값으로 넘겼다.
이 곳에서 매개 변수는 그대로 a,b이다.
하지만 x,y라는 변수도 인자를 넘기는 데에 사용되었다.
인자가 상수가 아닌 특정 변수의 값(x,y)으로 넘겨지는 경우, 
- 실제 매개 변수 (actual parameter)
라고 부르고 처음에 이야기된 매개변수인 a,b는 
- 형식 매개 변수(formal parameter) 
라고 부른다. 

> 💡 인자를 변수로 넘겨주는 경우는 특별히 그 변수를 actual parameter로, 원래 이야기되던 parameter는 구분해서 formal parameter로 불러준다는 이야기이다


## 정리
- Parameter : 매개변수 
   - 형식 매개 변수(formal parameter): 함수에서 정의된 변수를 사용할 때
   - 실제 매개 변수(actual parameter) : 인자(인수)값을 변수로 넘겨줄 때
- Argument : 인자 또는 인수라고 부른다. 인자 === 인수, 동일하다


### 참고 문서
- [MDN](https://developer.mozilla.org/ko/docs/Glossary/Parameter)
- [Parameter와 Argument](https://velog.io/@cloud_oort/Parameter%EC%99%80-Argument-%EC%9D%B8%EC%9E%90%EC%99%80-%EC%9D%B8%EC%88%98-%EC%9A%A9%EC%96%B4-%EA%B5%AC%EB%B6%84)







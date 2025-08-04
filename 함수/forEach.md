## forEach

forEach 메서드는 for문을 대체할 수 있는 고차함수다.
forEach 메서드는 자신의 내부에서 반복문을 실행한다. 즉, **반복문을 추상화한 고차함수**로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백함수로 전달받아 반복 호출한다. 

## 본론

```js
const numbers = [1,2,3]
const pows = []

numbers.forEach(number=>pows.push(number**2))
console.log(pows) // [1,4,9]
```

위 예제의 경우 forEach는 numbers 배열의 모든 요소를 순회하며 콜백 함수를 반복 호출한다.
numbers 배열의 요소가 3개이므로 콜백 함수도 3번 호출한다. 

> numbers에서 첫번째 값 -> pows 추가
numbers에서 두번째 값을 꺼냄 -> pows 추가
numbers에서 세번째 값을 꺼냄 -> pows 추가 


for Each 메서드의 콜백함수는 forEach 메서드를 호출한 배열의 요소값과 인덱스, forEach 메서드를 호출한 배열 자체, 즉 this를 순차적으로 전달받을 수 있다. 

```js
[1,2,3].forEach((num,index,arr)=>{
    console.log("요소값",num,"인덱스",index,"this",arr)
})
/* 
요소값 1 인덱스 0 this (3) [1, 2, 3]
요소값 2 인덱스 1 this (3) [1, 2, 3]
요소값 3 인덱스 2 this (3) [1, 2, 3]
*/
```

**forEach메서드는 원본배열(forEach 메서드를 호출한 배열, 즉 this)을 반영하지 않는다.**
하지만 콜백함수를 통해서 원본 배열을 변경할 수는 있다. 

```js
const numbers =[1,2,3]

numbers.forEach((number,index,arr)=>{
    arr[index]=number*2
})
console.log(numbers)
// [2,4,6]
```

forEach의 반환값은 언제나 undefined이다.

```js
const result = numbers.forEach((number)=>number)
console.log(result)
// undefined
```

forEach 메서드의 두 번째 인수로 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있는데 만약 두번째 인수없이 this를 사용하면 콜백함수 내부의 this는 undefined를 가르킨다.
이유는 클래스 내부 코드에는 암묵적으로 **strict mode**가 적용되기 때문이다.

> strict mode : 기존에 무시되었던 에러를 throwing한다. 즉 자바스크립트 문법을 엄격하게 검사한다고 생각하면 될 것 같다. 

가르키는 this를 일치시키려면 간단하게 두 번째 인수에 this로 사용할 객체를 전달하면 된다.
더 나은 방법은 ES6의 화살표 함수를 사용하는 것이다. 

화살표 함수는 함수 자체의 this 바인딩을 가지지 않기 때문에 this를 참조하면 바로 상위 스코프를 참조한다. 

> this 바인딩 : 함수가 호출될 때 this 키워드가 가르키는 객체가 무엇인지 정해지는 과정

forEach 메서드는 for문과 달리 break,continue문을 사용할 수 없다. 
배열의 모든 요소를 빠짐없이 모두 순회하며 중간에 순회를 중단할 수 없다. 

```js
[1,2,3].forEach((num,index,arr)=>{
    if(num > 1) break;
})
// Uncaught SyntaxError: Illegal break statement
```

희소 배열의 경우 존재하지 않는 요소는 순회 대상에서 제외된다. 
map, filter, reduce도 마찬가지이다. 

```js
const arr = [1, ,2]
for(let i = 0; i < arr.length; i++){
  console.log(arr[i])
}
// 1, undefined, 2
```

```js
arr.forEach(v=>console.log(v)) // 1,2
```

forEach 메서드는 for문에 비해 성능이 좋지는 않지만 가독성은 더 높다. 
따라서 시간이 많이 걸리는 복잡한 코드 혹은 높은 성능을 필요로 하는 것이 아니면 for 대신 forEach를 사용할 것을 권장한다. 












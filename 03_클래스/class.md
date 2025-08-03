# 클래스 문법

ES6클래스 문법은 좀 더 JAVA스럽게 객체 지향적으로 표현해주기 위해 추가된 새로운 문법이다.

ES5까지는 클래스가 없었다. 
그래서 프로토타입 체이닝을 통해 클래스 비슷하게 구현해왔는데 ES6에 들어서면서 클래스와 비슷한 구조 문법을 추가했다.

이 전에 했던 프로토타입 문법과 클래스 문법의 간단한 차이이다. 
이 둘은 같은 결과를 출력하지만, 문법 생김새만 다르고 내부 로직은 완전히 같은 구조라는 점만 기억하면 된다. 


**ES5 프로토타입 문법**
```js
// 생성자 함수
function Person(name,age){
    this.name = name
    this.age = age
}

Person.prototype.introduce = function(name){
    return `안녕, 나는 ${name}이야.`
}
const person = new Person("호빵맨") //인스턴스 생성
```

**ES6 클래스 문법**
```js
class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    introduce(){
        return `안녕, 나는 ${this.name}이야.`
    }
}

const person = new Person("호빵맨")
console.log(person.introduce())
```

클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다.
constructor 내부에 선언한 클래스 필드는 클래스가 생성할 인스턴스에 바인딩 된다.

> 💡 바인딩
> - 프로그램을 구성하는 어떤 구성 요소의 ```실제 값``` 또는 ````프로퍼티를 결정짓는 행위```를 말한다. 

## Class 선언 
constructor는 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 특수한 메서드이다.
⭐️ constructor는 클래스 안에 한 개만 존재할 수 있다. 2개 이상 있을 경우 Syntax Error 가 발생함

```js
class Person {
    height = 180 // 인스턴스 변수

    constructor(name,age){
        this.name = name
        this.age = age
    }
}

let person1 = new Person("호빵맨",12) // 인스턴스 생성
console.log(person1.name) // 호빵맨
console.log(person1.age) // 12
console.log(person1.height) // 180
```

클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다. 
constructor 내부에 선언한 클래스 필드는 클래스가 생성할 인스턴스에 바인딩 된다.
```
// this가 객체에 바인딩된다.
function <- binding <- this
```

클래스 필드는 그 인스턴스의 프로퍼티가 되며, 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다.(public)
```
Person.prototype.name <- 생성했던 Person 클래스 필드는 
```

## Class 메소드 정의 
클래스 메소드를 정의할 때는 객체 리터럴에서 사용하던 문법과 유사한 문법을 사용한다. 
```js
class Calculator{
    add(x,y){
        return x,y
    }
    subtract(x,y){
        return x-y
    }
}
let calc = new Calculator()
calc.add(1,10) // 11
```

객체 리터럴의 문법과 마찬가지로, 임의의 표현식을 대괄호로 둘러싸서 메소드르이 이름으로 사용할 수 있다.
```js
const methodName = 'introduce'; // 클래스 메소드 이름

class Person {
  constructor({name, age}) {
    this.name = name;
    this.age = age;
  }
  
  // 아래 메소드의 이름은 `introduce`가 됩니다.
  [methodName]() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
}

console.log(new Person({name: '호빵맨', age: 12}).introduce()); // 안녕하세요, 제 이름은 호빵맨입니다.
```

### Getter / Setter 
클래스 내에서 Getter 혹은 Setter를 정의하고 싶을 때는 메소드 이름 앞에 get 또는 set를 붙여준다.

### 정적 메서드(static)
정적 메서드는 클래스의 인스턴스가 아닌 클래스 이름으로 바로 호출되는 메서드이다.
static 메서드를 이름 앞에 붙여주면 해당 메서드는 **정적 메서드**가 된다.
> 우리가 랜덤값을 얻기 위해 Math.random() 같은 메서드를 쓰듯이, 따로 ```new Math()```없이 곧바로 클래스명, 메서드명으로 함수를 호출해서 사용하는 것이 바로 random 메소드가 static으로 설정되어 있기 때문이다.

```js
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    static static_name = "SATATIC_세균맨"

    getName(){
        return this.name
    }
    static getStaticName(){
        return this.static_name
    }
}
const person = new Person("호빵맨",12)
person.getName() // 호빵맨
person.getStaticName() // STATIC_세균맨
```

### 제너레이더(Generator)
제너레이터 메소드를 정의하려면 메소드 이름 앞에 *기호를 사용한다.
/---------------------
## Class 상속(Class Inheritance)
클래스 상속 기능을 통해서 한 클래스의 기능을 다른 클래스에서 재사용할 수 있다. 

### extends 키워드
```js

class Parent {
...
}

class Child extends Parent{
    ... 
}
```
위 코드의 extends키워드를 통해 Child 클래스가 Parent를 상속했다. 
> 부모 클래스 - 자식 클래스 관계 or 슈퍼 클래스(superclass)-서브클래스(subclass)

이렇게 사용하면 가능한 것들
1. 자식 클래스 A를 통해, 부모 클래스 B의 ```정적 메소드```와 ```정적 속성```을 사용할 수 있다.
2. 부모 클래스 B의 인스턴스 메소드와 인스턴스 속성을 자식 클래스 A의 인스턴스에서 사용할 수 있다.

```js
class Parent{
 static staticProps = 'staticProp';
 static staticMethod(){
    return "I'm a static Method"
 }
 instanceProps = 'instanceProps'
 instanceMethod(){
    return "I'm a instance method"
 }
}

class Child extends Parent{}
console.log(Child.staticProps) // staticProps
console.log(Child.staticMethod()) // I'm a static Method

const c = new Child()
console.log(c.instanceProps) // instanceProps
console.log(c.instanceOfMethod()) // I'm a instance method
```


### super 키워드
super키워드의 작동 방식은 아래와 같다.
1.```생성자 내부```에서 **super를 함수처러 호출하면, 부모 클래스의 생성자가 호출**
2. ```정적 메소드 내부```에서는 super.props와 같이 써서 **부모 클래스의 props 정적 속성에 접근**할 수 있다.
3. ```인스턴스 메소드 내부```에서는 super.props와 같이 써서 **부모 클래스의 props 인스턴스 속성에 접근**할 수 있다.
```js
super(); // 부모 생성자
super.메소드명 // 접근
```
```js
class Person{
    constructor(first,second){
        this.first = first
        this.second = second
    }
    sum(){
        return this.first + this.second
    }
}

class Person2 extends Person{
    constructor(first,second,third){
        super(first,second)
        this.third = third
    }
    sum(){
        return super.sum() + this.third
    }
}
const group = new Person2(10,20,30)
group.sum() // 60
```

## Private 클래식 변수 
`#`기호를 접두사로 사용하여 메소드와 접근자를 비공개로 설정할 수 있다. 동시에 getter, setter 메소드를 사용할 수 있다.
```js
class Private{
    #num = 100

    #privMethod(){
        console.log(this.#num)
    }
    publicMethod(){
        this.#privMethod()
    }
}

const privateClass = new Private();
privateClass.publicMethod()
```

### Private Fields 체크하기
클래스에 추가하는 것까지는 좋았지만, 클래스를 이용할 때, 이 클래스 인스턴스가 private인지 public인지 확인이 어려운 경우가 있었다. 
왜냐면, public 필드에 대해 클래스의 존재하지 않는 필드에 접근을 시도하면 undefined가 반환되는 반면에, private 필드가 undefined 대신 예외를 발생시키게 되기 때문이다. 그래서 특정 객체에 어떤 private프로퍼티가 있는지 확인하기 어려웠다. 
따라서 in 키워드를 이용해서 이 객체 안에 private 속성 / 메소드가 있는지를 체크할 수 있다.


/--------

참고 문서
- [자바스크립트 클래스 문법](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-ES6-Class-%EB%AC%B8%EB%B2%95-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC)
 
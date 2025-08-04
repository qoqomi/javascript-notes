# this 
- 현재 실행중인 함수나 메서도가 속한 객체를 ```참조하는 키워드```이다.

this를 사용하여 현재 실행중인 컨텍스트 내에서 사용되는 객체에 접근할 수 있다.

- 브라우저 -> this는 window이다. window에 탑재된 속성들이 출력되는 것을 볼 수 있다.
- 노드 -> 모듈을 가르킨다. 콘솔로그에 노드의 this를 출력하면 빈 객체가 된다. 


# 바인딩(Binding)
- 묶는 것 , 구속력
- 자바스크립트에서는 모든 함수(Function)에 this를 가지고 있다.
함수가 호출될 때마다 이 ```this를 가르키는 객체```가 결정된다.
이렇게 동적으로 this가 결정되는 것을 "this가 객체(Some Object)에 바인딩 된다." 라고 한다.
 

 참고 문서 
 - [This,Binding](https://strap.tistory.com/entry/JavaScript-This-Binding-%EB%AF%B8%EC%99%84%EC%84%B1)
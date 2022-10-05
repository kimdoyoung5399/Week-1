# 🐶 나의 첫 TodoList

---

항해 99 3주차 React 입문주차 개인과제에 처음으로 React로 만들어 보았다.
![initial](https://user-images.githubusercontent.com/112137813/193992953-9445191f-e68b-40ce-b844-28e4d0bc14b7.png)

---

### 😝구현기능

1. Todo 추가하기

- 제목과 내용을 입력하고 추가하기 누르면 Working.. 🔥 아래에 새로운 Todo 생성후 input 입력창 초기화

2. Todo 상태에 따른 위치 배치

- Todo를 완료하기 전이면 Working.. 🔥 라인, Done..! 🎉 라인에 생기며, 취소, 완료에 따른 상태 변화
- 삭제하기 버튼 누르면 TodoList에서 삭제

---

### 😅Trouble Shooting

1. 파일 import 할때 vscolde에서 자동생성으로 입력시 대소문자 구별못해서 에러 발생
   > 대소문자 입력 확인 필요!

```
Failed to compile.

Module not found: Error: Cannot find file: 'Todolist.jsx' does not match the corresponding name on disk: './src/pages/TodoList.jsx'.
ERROR in ./src/components/layout/Layout.jsx 7:0-44
Module not found: Error: Cannot find file: 'Todolist.jsx' does not match the corresponding name on disk: './src/pages/TodoList.jsx'.

webpack compiled with 1 error
```

2. button 사용하여 추가하기 버튼 누르면 추가즉시 새로고침..

> form 태그안에 button 태그 사용시 tpye 확인!!

3. A component is changing an uncontrolled input to be controlled.

> 인풋창을 입력하는 순간 이런 에러가 뜨더라.. input value 로 undefined 가 들어간다고 에러메세지를 띄운것이다..

> Form 태그 안에 key : value 의 이름 또는 대소문자 확인... 누구에게 설명하다가 확인되어 고치니 정상작업이 된당!

```
A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
```

---

처음으로 React로 만들어 봤는데 아직까지도 어렵다...
가장 기본적인 state , props 등등..
배울게 아직 많지만 앞으로 더 노력 해봐야겠다.

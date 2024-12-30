# useReducer

## 목적

- state를 생성
- state를 업데이트하는 기능을 별도로 관리
- state를 업데이트하는 과정이 복잡한 경우 적합함
- Redux, Recoil, Zustand 등의 state 관리의 기본 구성을 이해하는데 도움.

## useReducer 이해의 과정

- 간단한 state 관리
- `폴더 컨벤션` 생성 후 관리(2단계 정도, 중소 규모 관리, 대규모 관리)
- context API와 useReducer 활용

## 기본 예제

```jsx
import { useReducer } from "react";

// 1. 초기 상태
const initialState = { count: 0 };

// 2. 리듀서 함수(상태를 변경하는 기능)
// state는 초기 상태값을 말함. (별도로 업데이트하지 않는다)
// action에 여러가지 옵션을 주어 state를 업데이트한다.
function reducer(state, action) {
  console.log("state:", state);
  console.log("action:", action);
  switch (action.type) {
    case "add":
      // 처리하고 나서 항상 state를 리턴해준다.
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  // 3. useReduce에 state와 디스패치 함수 등록
  // 첫번째 매개변수: 리듀서 함수
  // 두번째 매개변수: 초기값 state
  // 리턴값: state는 리랜더링시 표현
  // 리턴값: dispatch 는 리듀서 함수 실행
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>결과값:{state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>더하기</button>
      <button onClick={() => dispatch({ type: "minus" })}>빼기</button>
      <button onClick={() => dispatch({ type: "reset" })}>초기화</button>
      <button onClick={() => dispatch({ type: "gogo" })}>테스트</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>useReducer 활용</h1>
      <Counter />
    </div>
  );
}
export default App;
```

## 소규모 프로젝트

- components/counter 폴더 생성
- components/counter/Counter.jsx 파일 생성
- components/counter/CounterReducer.js 파일 생성

## 중규모 프로젝트

- src/components/counter/Counter.jsx : UI
- src/`store` 폴더 생성
- src/store/`reducers` 폴더 생성
- src/store/`initialStates` 폴더 생성

## 대규모 프로젝트

- `src/modules 폴더` 생성
- `src/modules/counter 폴더` 생성

  - countIntialState.js
  - countTypes.js

  ```js
  // Action type의 상수화
  export const ADD = "add";
  export const MINUS = "minus";
  export const RESET = "reset";
  ```

  - countReducer.js
  - countActions.js

  ```js
  import { ADD, MINUS, RESET } from "./countTypes";

  // action은 상태를 업데이트하는 과정
  export const add = () => ({ type: ADD });
  export const minus = () => ({ type: MINUS });
  export const reset = () => ({ type: RESET });
  ```

  - Counter.jsx

  ```jsx
  <div>
    <h1>Counter: {countState.count}</h1>
    <button onClick={() => dispatch(add())}>증가</button>
    <button onClick={() => dispatch(minus())}>감소</button>
    <button onClick={() => dispatch(reset())}>초기화</button>
  </div>
  ```

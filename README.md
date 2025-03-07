# 최적화

## 종류

- useCallback : 함수 저장해두고 새로 랜더링 될 때 만들지 않기
- React.memo : 컴포넌트에서 props가 바뀌지 않으면 새로 리랜더링 안함.

## useMemo

```jsx
import { useState } from "react";

const App = () => {
  console.log("App : 리랜더링");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  // 값을 2배로
  const now = num * 2;
  console.log("now : ", now);
  return (
    <div>
      <h2>count 값 : {count}</h2>
      <h2>num 값 : {num}</h2>
      <h2>now 는 2배값 : {now}</h2>
      <button onClick={() => setNum(num + 1)}>num 증가 </button>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
    </div>
  );
};
export default App;
```

- 문제점
  - count 변경시
  - now 값은 상관없는데 다시 `계산`됨.
  - num이 변할 때만 now가 계산되길 원함.

```jsx
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  console.log("App : 리랜더링");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  // 값을 2배로
  const now = useMemo(() => {
    console.log("now 계산");
    return num * 2;
  }, [num]);
  return (
    <div>
      <h2>count 값 : {count}</h2>
      <h2>num 값 : {num}</h2>
      <h2>now 는 2배값 : {now}</h2>
      <button onClick={() => setNum(num + 1)}>num 증가 </button>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
    </div>
  );
};
export default App;
```

## useCallback

```jsx
import { useState } from "react";

const App = () => {
  console.log("App 리랜더링");
  const [count, setCount] = useState(0);
  //새로 랜더링 되면 다시 만들어짐.
  const add = () => {
    console.log("add 함수 생성");
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={add}>
        함수 실행
      </button>
    </div>
  );
};
export default App;
```

- 문제점
  - count state가 변하면
  - App이 리랜더링 되면서 add 함수가 다시 만들어짐

```jsx
import { useCallback } from "react";
import { useState } from "react";
import Child from "./pages/Child";

const App = () => {
  console.log("App 리랜더링");
  const [count, setCount] = useState(0);
  const [go, setGo] = useState(false);
  // 새로 랜더링 되면 다시 만들어짐.
  // count가 변하면 함수가 다시 정의되어 재실행된다.
  const add = useCallback(() => {
    console.log("add 함수 생성");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={add}>
        add 함수 실행
      </button>
      <button type="button" onClick={() => setGo(!go)}>
        Go state 갱신
      </button>
      <Child add={add} />
    </div>
  );
};
export default App;
```

```jsx
import { memo } from "react";

const Child = ({ add }) => {
  console.log("자식 리랜더링");
  return (
    <div>
      Child
      <button onClick={add}>자식이 실행</button>
    </div>
  );
};
export default memo(Child);
```

- 리랜더링의 대상 state를 별도로 지정해서 처리한다.

## React.memo

- 불필요한 리랜더링 방지.
- 컴포넌트가 변하면 자식 컴포넌트도 같이 변함.
- 변경의 조건은 prop로 state나 state를 업데이트하는 함수를 전달할 경우 갱신된다.
- 그 외에는 자식들이 리랜더링되지 않는다.

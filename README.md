# useCallback

- `React를 최적화`하였다: 리랜더링 횟수를 줄인다.

## 최적화

### 레이아웃 최적화를 했는가?

- `Shift Layout` 적용했는가
- css로 직접 만들거나 npm을 이용하여 해결

### 리랜더링 최적화를 했는가?

- `useMemo()`: 변수 관리 했어요?
- `useCallback()`: 함수 관리 했어요? = 함수를 리랜더링할 때 다시 정의하지 않고 보관해둬야한다.
- `React.memo()`: 컴포넌트 관리 했어요?

### Lazy Loading 했는가?

### 이미지 최적화 했는가?

- web...

### SEO 최적화 했는가?

### GA4 적용 했어요?

(어렵다..!)

## useCallback

- useCallback() : 함수를 리랜더링시 다시 정의하지 않고 보관해둠

### 기본예제

```jsx
import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  // 리랜더링 즉, state 가 바뀌면 함수도 다시 만들어짐.
  // 이를 다시 정의하지 않도록 useCallback 활용
  const add = useCallback(() => {
    // 함수의 기능
    setCount(prev => prev + 1);
  }, []);
  return (
    <div>
      <h1> 카운팅 : {count}</h1>
      <button onClick={add}>증가</button>
    </div>
  );
}
export default App;
```

### 응용예제

- `컴포넌트는 props가 전달되면 리랜더링한다.`
- `props가 변화가 없으면 리랜더링 안한다`

```jsx
 /function App() {
  // useState
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  // 숫자 증가 함수를 메모해둠.
  // 만약 count가 변하면 리랜더링됨.
  // 만약 text가 변하면 리랜더링됨.
  // useCallback을 활용하지 않는다면 text와 count가 변하면 함수가 다시 만들어짐.
  const add = useCallback(() => {
    console.log("함수 재생성됨");
    setCount(prev => prev + 1);
  }, [count]);

  return (
    <div>
      <h1>부모 컴포넌트</h1>
      <Child add={add} />
      <div>카운팅: {count}</div>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
export default App;

function Child({ add }) {
  console.log("자식 컴포넌트 리랜더링");
  return (
    <div>
      자식 컴포넌트
      <button type="button" onClick={add}>
        증가
      </button>
    </div>
  );
}
```

- 의존성 배열의 이해

```jsx
import { useState, useCallback } from "react";

function App() {
  const [query, setQuery] = useState("");
  // query 가 변경이 된다면 그때 함수를 다시 정의하겠다.
  const handleSearch = useCallback(() => {
    console.log("query를 처리하는 새로운 함수 생성 ", query);
  }, [query]);

  return (
    <div>
      <h1>state 변경시 함수 재 실행</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}
export default App;
```

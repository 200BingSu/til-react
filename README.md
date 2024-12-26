# useMemo

- `React를 최적화`하였다: 리랜더링 횟수를 줄인다.

## 최적화

### 레이아웃 최적화를 했는가?

- `Shift Layout` 적용했는가
- css로 직접 만들거나 npm을 이용하여 해결

### 리랜더링 최적화를 했는가?

- `useMemo()`: 변수 관리 했어요?
- `useCallback()`: 함수 관리 했어요?
- `React.memo()`: 컴포넌트 관리 했어요?

### Lazy Loading 했는가?

### 이미지 최적화 했는가?

- web...

### SEO 최적화 했는가?

### GA4 적용 했어요?

(어렵다..!)

## useMemo

- 값을 연산한 결과 보관시 활용
- 변수를 보관한다.
- 값, 또는 복잡한 계산의 결과를 재활용할 때
- 같은 값을 계속해서 리랜더링시 `계산하지 않도록 보관`함
- `가능하면 많이 활용하지 말자`(부하가 발생할 수 있기 때문에)

### 기본 이해

- 아래 코드는 숫자를 변경하면 다시 계산한다.
- 아래 코드는 글자를 변경하면 다시 number 를 계산한다.
- 즉, 리랜더링 될 때마다 숫자와 글자 변경을 매번 다시 계산한다. (성능상 이유없이 다시 계산하는 문제)

```jsx
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // useMemo
  //   값을 메모해두고 해당하는 state만 변경되면 그 때 업데이트 하기.
  const resultFn = useMemo(() => {
    console.log("다시 계산합니다:", number);
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>간단한 계산 출력</h1>
      <div>
        <input
          type="number"
          placeholder="숫자입력"
          value={number}
          //   숫자를 입력할 때, 값 변경: number 값 업데이트
          onChange={e => setNumber(parseInt(e.target.value))}
        />
        <p>값 : {resultFn} </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="글자입력"
          value={text}
          //   글자를 입력할 때, number는 변경되지 않기를 바람.
          onChange={e => setText(e.target.value)}
        />
        <p>글자 : {text} </p>
      </div>
    </div>
  );
}
export default App;
```

- useMemo를 이용해 연산을 조건을 걸어두고 진행하도록 변경
- 불필요한 연산을 배제해서 성능을 올려준다.

```jsx
const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // 값을 메모해두고 해당하는 state만 변경되면 그 때 업데이트 하기.
  // 값을 보관하고 리랜더링이 일어나도 다시 값을 계산하는 과정을 생략한다.
  const resultFn = useMemo(() => {
    console.log("다시 계산합니다:", number);
    return number * number;
  }, [number]); //[number]은 의존성 배열이다. = number 값이 바뀌면 다시 연산하기. 그 외에는 예전 값을 사용한다.

  return (
    <div>
      <h1>간단한 계신 출력</h1>
      <div>
        <input
          type="number"
          placeholder="숫자 입력"
          value={number}
          onChange={e => setNumber(parseInt(e.target.value))}
        />
        <p>값 : {resultFn}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="글자 입력"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <p>글자 : {text}</p>
      </div>
    </div>
```

### 활용 예제

- 단순 연산 외에 배열 처리시 활용
- 배열이 엄청 길 때, 배열을 다루는 연산이 복잡하면 실행이 느려진다.
- 배열이 변경될 때만 연산하도록 useMemo 활용

```jsx
// useState
const [word, setWord] = useState("");
// 배열(실제로 많은 양이 들어있다고 가정)
const goods = ["apple", "banana", "cherry"];
// word에 따른 배열 요소 출력 결과 관리
// 리랜더링이 되면 무조건 배열의 요소를 탐색하는 것이 아니라, useMemo를 활용
const sortGoods = useMemo(() => {
  console.log("배열을 탐색함");
  //word를 포함한 요소만 리턴한다.
  return goods.filter(item => item.includes(word));
}, [word, goods]);

return (
  <div>
    <h1>배열 연산 줄이기</h1>
    <input type="text" value={word} onChange={e => setWord(e.target.value)} />
    <ul>
      {/* 사용자 입력에 따른 결과물 출력 */}
      {sortGoods.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  </div>
);
```

- 검색 속성 따른 배열 정렬

```jsx
// 데이터를 정렬한다.
const [sortBy, setSortBy] = useState("name");
// 백엔드에서 받은 회원 목록 데모 데이터
const data = [
  { id: 1, name: "Bbc", age: 40 },
  { id: 2, name: "Abc", age: 25 },
  { id: 3, name: "Ccc", age: 35 },
];
// 복잡한 연산을 매번 실행하지 않고, sortBy 가 바뀐 경우만 정렬하고 싶다.
const sortData = useMemo(() => {
  console.log("정렬함", sortBy);
  // 아래 sort 구문은 조건에 따라서 true, false 를 반복하면 순서배치 진행
  // a[sortBy] 는                   a["name"] > b["name"]
  return [...data].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
}, [sortBy]);

return (
  <div>
    <h1>배열의 속성을 이용한 정렬</h1>
    <div>
      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value={"name"}>Name</option>
        <option value={"age"}>AGE</option>
        <option value={"id"}>ID</option>
      </select>
    </div>
    {/* 표 */}
    <table border={1}>
      {/* 테이블 헤더 */}
      <thead>
        {/* table row */}
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>id</th>
        </tr>
      </thead>
      {/* 테이블 몸체 */}
      <tbody>
        {sortData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
```

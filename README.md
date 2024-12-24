# useRef

- `리랜더링 하여도 값을 보관`한다.
- 화면 출력 용도는 아님
- 용도
  : html 태그 참조
  : 변수값 참조

## DOM 요소 접근

- App.jsx

```jsx
import { useRef } from "react";

function App() {
  // 태그참조
  const inputRef = useRef(null);

  const handleFocus = () => {
    // current 를 통해서 태그 참조
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>포커스이동</h1>
      {/* ref 로 연결한다. */}
      <input ref={inputRef} placeholder="아이디 입력" />
      <button onClick={() => handleFocus()}>입력창 이동</button>
    </div>
  );
}
export default App;
```

### 값 접근 및 저장

- 리랜더링 시에도 값을 보관한다.

```jsx
function App() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  const incre = () => {
    countRef.current++;
    console.log(countRef.current);
    setCount(countRef.current);
  };

  return (
    <div>
      <h1>값 보관 및 저장</h1>
      <p>{countRef.current}</p>
      <button type="button" onClick={incre}>
        증가
      </button>
    </div>
  );
}
```

## 응용예제

- 특정 태그로 이동

```jsx
import { useRef } from "react";

function App() {
  const compRef = useRef(null);
  const topRef = useRef(null);
  const moveComp = () => {
    console.log("회사소개로 이동");
    compRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={topRef}>
      <h1>스크롤 해보기</h1>
      <button onClick={moveComp}>회사소개</button>
      <div style={{ height: "100vh", backgroundColor: "pink" }}>인사말</div>
      <div
        ref={compRef}
        style={{ height: "100vh", backgroundColor: "skyblue" }}
      >
        회사소개
      </div>
      <button
        onClick={moveTop}
        style={{ position: "fixed", right: 0, bottom: 0 }}
      >
        위로가기
      </button>
    </div>
  );
}
export default App;
```

- 폼 초기화

```jsx
function App() {
  const inputRef = useRef(null);
  const clear = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="이름" />
      <button onClick={clear}>값 초기화</button>
    </div>
  );
}
```

- 비디오 제어

```jsx
import { useRef } from "react";

function App() {
  const videoRef = useRef(null);
  const prevV = () => {
    videoRef.current.currentTime -= 10;
  };
  const playV = () => {
    videoRef.current.currentTime = 0;
    videoRef.current;
  };
  const stopV = () => {
    videoRef.current.currentTime = 0;
    videoRef.current;
  };
  const nextV = () => {
    videoRef.current.currentTime += 0;
  };
  return (
    <div>
      <h1>비디오 제어</h1>
      <div>
        <video src="" autoPlay muted controls ref={videoRef} />
      </div>

      <button type="button" onClick={prevV}>
        10초 전
      </button>
      <button type="button" onClick={playV}>
        재생
      </button>
      <button type="button" onClick={stopV}>
        정지
      </button>
      <button type="button" onClick={nextV}>
        10초 후
      </button>
    </div>
  );
}
export default App;
```

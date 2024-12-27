# 커스텀 훅(custom hook)

## hook이란?

- hook이란 `걸다` 또는 `덩달아 실행한다`는 의미.
- 리액트 컴포넌트의 state와 lifecyled에 따라서 같이 실행되어지는 함수
- useState, useEffect, useReft, useContext, useMemo, useCallback ... 등등 200개 정도
- 개발자가 리액트 빌트인 hook처럼 만든 hook을 커스텀 훅이라고 합니다.
- 예) useLocation, usenavigation, useForm

## hook을 만들 때 유의사항

- 동일한 기능을 만약 여러번 사용한다면 함수를 만들어 볼 생각을 하자.
- 이 함수가 컴포넌트에 사용이 된다면 hook으로 만들어볼 생각을 하자.
- `/src/hooks`라는 폴더에 모아두겠다라고 생각해 보자.
- 파일명을 반드시 `use훅명`으로 생성해야 리액트에서 hook 처럼 사용하게 해준다.
- 파일명은 반드시 `use훅명.js`로 작성해야 한다.

## hook을 사용시 유의사항

- 리액트 훅이든, 사용자 정의 훅이든 반드시 `컴포넌트 내부`에 배치되어야 한다.
- 리액트 훅이든, 사용자 정의 훅이든 `if문, for문 등의 내부에서는 사용할 수 없다`.
- 예외로, 커스텀 훅은 컴포넌트가 아닌 곳에도 사용할 수 있는 리액트 훅이다.

## 기본 예제

```js
import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  const reset = () => setCount(0);

  return { count, add, minus, reset };
}
```

```jsx
function App() {
  const { count, add, minus, reset } = useCount();
  return (
    <div>
      <h1>카운트: {count}</h1>
      <button type="button" onClick={add}>
        증가
      </button>
      <button type="button" onClick={minus}>
        감소
      </button>
      <button type="button" onClick={reset}>
        리셋
      </button>
    </div>
  );
}
```

## 활용 예제

- 동일한 기능의 반복 사용이라면 custom hook을 고민해야함.
- custom hook을 생성시 많은 고민을 해야 합니다.
- /hooks/useAxios.js

```js
// 일반적으로 FE 개발자는 백엔드와 API 통신을 할거다.
// 일반적으로 FE 개발자는 주소와 자료를 전달하고 결과를 받을 것이다.
// 일반적으로 FE 개발자는 get, post, put, delete 를 사용할 것이다.
// 내가 API 통신을 편리하게 사용할 수 있는 Hook 을 만들어서
// 팀의 API 통신 컨벤션을 제공하겠다.

import axios from "axios";
import { useState, useEffect } from "react";

// 일반적 사용을 조사
// const { data, error, loading } = useAxios("주소", "자료", "get");
// const { data, error, loading } = useAxios("주소", "자료", "GET");
// const { data, error, loading } = useAxios("주소", { 자료 }, "post");
// const { data, error, loading } = useAxios("주소", null, "put");
// const { data, error, loading } = useAxios("주소", 1, "delete");
export function useAxios(_url, _payload = null, _method) {
  // api 회신 결과
  const [data, setData] = useState(null);
  // api 회산 오류 결과
  const [error, setError] = useState(null);
  // api 호출 진행 중
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // 로딩 진행중
    setLoading(true);
    // API 연동 실행
    const fetchAPI = async () => {
      try {
        let response;
        let method = _method.toUppercase(_method);
        switch (method) {
          case "GET":
            response = await axios.get(_url);
            break;
          case "POST":
            response = await axios.post(_url, _payload);
            break;
          case "PUT":
            response = await axios.put(_url, _payload);
            break;
          case "DELETE":
            response = await axios.delete(_url);
            break;
          default:
            throw new Error(`${_method} 잘못 보내셨네요.`);
        }
        setData(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    // 만들어둔 fetch 실행
    fetch();
    // 데이터 로딩 완료
    setLoading(false);
  }, [_url, _payload, _method]);

  return { data, error, loading };
}
```

- /hooks/useLogin

```js
export const useLogin = () => {
  // 로그인 상태
  const [isLogin, setIsLogin] = useState(false);
  //   사용자 정보
  const [data, setData] = useState(null);
  // 서버 에러
  const [error, setError] = useState(null);
  //   서버 연결중
  const [loading, setLoading] = useState(false);
  //   로그인 함수
  const login = async (id, pw) => {
    try {
      const res = await axios.post("/api/login", { id: id, pw: pw });
      setData(res.data);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  };
  return { data, loading, error, isLogin, login };
};
```

- /hooks/useComponent.js

```js
// 화면의 리사이즈를 체크하는 용도의 customHook
const useComponent = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
```

- 사용 예

```js
function App() {
  const { count, add, minus, reset } = useCount();
  const { data, error, loading } = useAxios();
  const { data, loading, error, isLogin, login } = useLogin();
  const windowSize = useComponent();
  return (
    <div>
      <h1>카운트: {count}</h1>
      <button type="button" onClick={add}>
        증가
      </button>
      <button type="button" onClick={minus}>
        감소
      </button>
      <button type="button" onClick={reset}>
        리셋
      </button>
    </div>
  );
}
```

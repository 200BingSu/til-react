# React 컴퍼넌트 만들기

## 1. 컴포넌트란?

- 웹 페이지의 <b>각 요소 중</b> 재활용 되는 내요을 별도의 jsx로 생성한 것.
- 예) Header.jsx, Footer.jsx 등

## 2. `component`와 `page`를 구분해 본다.

- 수업 중 `page`라 이야기하면,
  '`component`를 모아서 하나의 페이지를 구성한다'는 의미이다.
- 추후에 `pages` 폴더를 생성해야 함.(`폴더는 무조건 소문자`)
- 추후에 `componets` 폴더를 생성해야 함.

## 3. 컴포넌트의 이해

### 3.1. html을 React에서는 `jsx`라고 한다.

- js로 html을 생성하는 역할
- page라는 이름이 붙어있다.
- 함수명이 대문자로 시작하는 파스칼 케이스로 써야한다.
- jsx를 출력하는 함수는 파스칼 케이스를 써야한다는 규칙이 있다.
- jsx를 출력하는 함수는 반드시 `return()` 구문이 있어야 한다. -` return() 안쪽`에 `html` 형식을 작성한다.
- jsx는 `html 태그 형식`으로 호출(call) 한다.

```jsx
function IndexPage() {
  return <div>안녕</div>;
}
```

- jsx는 <b>반드시 root 태그</b>가 존재해야한다.
- 용도가 묶음 외에 없는 Root라면 `<></> Fragment`로 묶는다.

````jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

/**
 * js로 html을 생성하는 역할
 * page라는 이름이 붙어있다.
 * 함수명이 대문자로 시작하는 파스칼 케이스로 써야한다.
 * jsx를 출력하는 함수는 파스칼 케이스를 써야한다는 규칙이 있다.
 * jsx를 출력하는 함수는 반드시 return() 구문이 있어야 한다.
 * return() 안쪽에 html 형식을 작성한다.
 * jsx는 html 태그 형식으로 호출(call) 한다.
 * ```jsx
 * function IndexPage() {return <div>안녕</div>;}
 * ```
 * jsx는 반드시 root 태그가 존재해야한다.
 * 용도가 묶음 외에 없는 Root라면 <></> Fragment로 묶는다.
 */
function IndexPage() {
  return (
    <>
      <header>상단</header>
      <main>메인</main>
      <footer>하단</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndexPage></IndexPage>
  </StrictMode>,
);
````

### 3.2. 각 화면의 기능에 따라 파일을 분리한다.

- `/src/pages/` 폴더에는 URL의 주소에 맞는 페이지 배치
- `/src/components/` 폴더에는 각각의 페이지에 배치될 html 요소를 배치

- /src/components/Header.jsx

```jsx
const Header = () => {
  return (
    <header>
      <a href="#">로고</a>
      <div>
        <ul>
          <li>
            <a href="">주메뉴1</a>
          </li>
          <li>
            <a href="">주메뉴2</a>
          </li>
          <li>
            <a href="">주메뉴3</a>
          </li>
          <li>
            <a href="">주메뉴4</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
```

- /src/components/Footer.jsx

```jsx
const Footer = () => {
  return (
    <footer>
      <a href="#">로고</a>
      <div>카피라이터</div>
      <div>SNS</div>
    </footer>
  );
};

export default Footer;
```

- /src/pages/IndexPage.jsx

```jsx
function IndexPage() {
  return (
    <>
      <Header></Header>
      <main>
        <div>공지사항/갤러리</div>
        <div>배너</div>
        <div>바로가기</div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default IndexPage;
```

- /src/pages/CeoPage.jsx

```jsx
import Footer from "../components/Footer";
import Header from "../components/header";

function CeoPage() {
  return (
    <>
      <Header></Header>
      <main>대표인사말</main>
      <Footer></Footer>
    </>
  );
}
export default CeoPage;
```

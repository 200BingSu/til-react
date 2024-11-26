# React 복습

## 1. 퍼블리싱

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const PubilshPage = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          logo
        </a>
        <nav className="gnb">메뉴</nav>
      </header>
      <main className="main">
        <div className="slide">슬라이드</div>
        <div className="content">
          <div className="notice">notice</div>
          <div className="banner">banner</div>
          <div className="link">link</div>
        </div>
      </main>
      <footer className="footer">
        <a href="#" className="footer-logo">
          logo
        </a>
        <p className="copyright">copyright</p>
        <div className="sns">SNS</div>
      </footer>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PubilshPage></PubilshPage>
  </StrictMode>,
);
```

## 2. 컴포넌트 분리

- `/src/components`와 `/src/pages` 폴더 생성.
- 각 페이지는 무엇이 나올지 회의
- 각 페이지에 공통으로 출력될 원본 컴포넌트는 무엇이 필요한지 회의

### 2.1. Pages 폴더

- /src/pages/IndexPage.jsx 생성

### 2.2. 컴포넌트

- /src/components/header/Header.jsx
- /src/components/feader/Feader.jsx

### 2.3. 파일을 만들고, 화면에 나온 뒤 꼼꼼히 작업.

- main.jsx에 작성한 퍼블리싱을 바탕으로 각 component와 IndexPage에 내용을 옮겨준다.

## 3. css

- `IndexPage.jsx`에 적용
- `/src/styles/` 폴더 만들기
- `/src/styles/pages` 폴더 만들기
- `/src/styles/components` 폴더 만들기

### 3.1. IndexPage.jsx를 위한 css

- `/src/styles/pages/index-page.css` 만들기

## 4. module.css

- `src/component/Header.jsx`에 적용
- `src/styles/header/header.module.css` 만들기

## 5. scss

- `src/component/Footer.jsx`에 적용
- `src/styles/Footer/feader.module.scss` 만들기

## 6. object css

### 6.1. 인라인 방식

- 적극적 사용합니다
- `src/components/notice/Notice.jsx` 만들기

```jsx
const Notice = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "orange",
        width: "calc(100% /3)",
        height: "200px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      공지사항
    </div>
  );
};

export default Notice;
```

### 6.2. Object 방식: 변수 만들고 css 적용

- 객체 리터럴
- `/src/components/banner/Banner.jsx`에 적용

## 7. CSS-in-JS(Emotion)

- 가능하면 컴포넌트 생성하고, 그 컴포넌트에 적용하자.
- `/src/pages/IndexPage.jsx`
- 장점
  : 이름으로 내용 배치 구분 가능.
  : 재활용 가능
  : 공통으로 사용하는 경우라면 `props`로 조절 가능
- 공통적으로 사용할 경우 별도의 js파일로 빼내기

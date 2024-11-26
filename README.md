# React 변수 알아보기

## 1. JSX 변수 활용

- /src/components/Pop.jsx 생성
  :rafce(React Arrow Function Component Export)
- 1. 컴포넌트는 html을 배치한다.
- 2. 컴포넌트는 css를 배치한다.
- 3. 컴포넌트에 js를 활용한다.

### 1.1. JSX에 변수 출력 하는 법

- 보간법(interpolation)

```jsx
const Pop = () => {
  const title = "팝업 제목";
  const data = "팝업 내용";
  return (
    <div>
      <h1 style={{ color: "red" }}>{title}</h1>
      <p>{data}</p>
    </div>
  );
};

export default Pop;
```

### 1.2. JSX 보간법을 이용한 css 출력

#### 1.2.1. 인라인 방식

- 복잡하다.
- `{ 속성명 : 속성값 }`
- style = {{속성명:속성값, 속성명:속성값, ...}}

```jsx
<h1 style={{ color: "red", fontSize: "12px" }}>{title}</h1>
```

#### 1.2.2. 객체 리터러러 오브젝트 방식

```jsx
const Pop = () => {
  const title = "팝업 제목";
  const data = "팝업 내용";
  //css의 역할을 하는 객체 리터럴 변수명은 관례상 파스칼로 합니다.
  const TitleStyle = { color: "red", fontSize: "12px" };
  return (
    <div>
      <h1 style={TitleStyle}>{title}</h1>
      <p>{data}</p>
    </div>
  );
};

export default Pop;
```

#### 1.2.3. 객체 리터럴 오브젝트는 가능하면 .js에 export 형식 권장

```js
export const TitleStyle = { color: "red", fontSize: "12px" };
export const BodyStyle = { color: "green", fonsStize: "11px" };
```

```jsx
import { BodyStyle, TitleStyle } from "./pop";

const Pop = () => {
  const title = "팝업 제목";
  const data = "팝업 내용";
  return (
    <div>
      <h1 style={TitleStyle}>{title}</h1>
      <p style={BodyStyle}>{data}</p>
    </div>
  );
};

export default Pop;
```

## 2. CSS-in-JS

- Styled Component
- Emotion (현재 우위)

### 2.1. Emotion 환경 구성

- 설치

```
npm i @emotion/react @emotion/styled
```

- vscode-styled-components 설치

### 2.2. 장점

- 태그만 보아도 어떤 내용을 보여주는 지 알 수 있다.
- 별도의 컴포넌트.jsx 안 만들어도 괜찮다.
- css도 함께 작성할 수 있다.

```jsx
import styled from "@emotion/styled";
import { BodyStyle, TitleStyle } from "./pop-style";

const Pop = () => {
  const title = "팝업 제목";
  const data = "팝업 내용";
  const PopupTitle = styled.h1`
    color: red;
    font-size: 20px;
    text-align: center;
  `;
  const SlideDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
  `;
  const BannerDiv = styled.div``;
  const NoticeDiv = styled.div``;

  return (
    <div>
      <PopupTitle>{title}</PopupTitle>
      <p style={BodyStyle}>{data}</p>
      <SlideDiv>슬라이드</SlideDiv>
      <BannerDiv>베너</BannerDiv>
      <NoticeDiv>공지사항</NoticeDiv>
    </div>
  );
};

export default Pop;
```

### 2.3. Props 전달 가능

- Emotion에서 props가 무엇인지 이해 후
- jsx에서도 그대로 이해하면 됨
- 장점은 응용범위가 넓고, 재사용할 수 있다.
- JSX 컴포넌트처럼 css 컴포넌트입니다.
- 일반적으로 별도 js 파일로 모아서 팀이 활용한다.

#### 2.3.1. 기본형

```js
const SlideDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;
```

- 사용

```js
<SlideDiv>슬라이드</SlideDiv>
```

#### 2.3.2. props 활용

```js
const PopupTitle = styled.h1`
  color: hotpink;
  font-size: ${props => props.size}px;
  text-align: center;
`;
```

```js
<PopupTitle size={"8"}>{title}</PopupTitle>
```

#### 2.3.3. props 활용-디폴트값을 적용

```js
const PopupTitle = styled.h1`
  color: red;
  font-size: ${props => props.size || 20}px;
  text-align: center;
`;
```

```js
<PopupTitle size={"8"}>{title}</PopupTitle>
```

# 리소스 최적화

- 이미지, 폰트 등등
- /public은 원본을 유지한다.
- /src는 압축한다.(웹브라우저도 보관하고 있다)

## 1. 이미지

- 용도에 맞게 판단하자.
  - 동적인 것을 제외하면 `src`에 보관하자(그냥 src에 넣자..)

## 2. font 파일

- 가능하면 웹폰트 URL을 사용하자.
- 구글 폰트 또는 눈누에 웹폰트 URL이 없는 경우, 직접 파일 설정
- 파일인 경우 `public 폴더`에 넣어두고 활용하자.
- /src/assets에 두시면 설정할 것이 꽤 많음.

### 2.1. 폰트 파일인 경우

- public/ 폴더에 파일 배치
- /src/index.css : 모든 곳에 기본적 적용

```css
/* 글꼴 설정 */
@font-face {
  font-family: "chab";
  src: url("/public/chab.ttf");
}
@font-face {
  font-family: "ddag";
  src: url("/public/ddag.ttf");
}
body {
  font-family: "ddag";
}
```

# 빌드하기

- 배포 버전 생성

```
npm run build
```

- 배포 버전 테스트

```
npm run preview
```

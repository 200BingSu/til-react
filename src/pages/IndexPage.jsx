import Footer from "../components/Footer";
import Header from "../components/header";
import "./IndexPage.css";
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
      <Header></Header>
      <main>
        <div className="layout">
          <div>공지사항/갤러리</div>
          <div>배너</div>
          <div>바로가기</div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default IndexPage;

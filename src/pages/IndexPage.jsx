import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Notice from "../components/notice/Notice";
import { LinkDiv } from "../styles/common/styled-common";
import "../styles/pages/index-page.css";

function IndexPage() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <div className="slide">슬라이드</div>
        <div className="content">
          <Notice></Notice>
          <Banner></Banner>
          <LinkDiv bc="red" className="link">
            link
          </LinkDiv>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default IndexPage;

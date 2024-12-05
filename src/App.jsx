import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// as 는 alias 라는 문법으로 별칭을 지음
import HomePage from "./pages/Index";
import AboutPage from "./pages/about/Index";
import TeamPage from "./pages/about/Team";
import ServicePage from "./pages/service/Index";
import NowPage from "./pages/service/Now";
import BlogPage from "./pages/blog/Index";
import BlogDetailPage from "./pages/blog/Detail";
import BlogListPage from "./pages/blog/List";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Layout from "./pages/blog/layout";

// 목(Mock up)데이터
const BlogDatas = [
  { id: 1, title: "블로그1", cate: "design", content: "디자인 관련 글1" },
  { id: 2, title: "블로그2", cate: "market", content: "마케팅 관련 글" },
  { id: 3, title: "블로그3", cate: "design", content: "디자인 관련 글2" },
  { id: 4, title: "블로그4", cate: "idea", content: "아이디어 관련 글" },
  { id: 5, title: "블로그5", cate: "design", content: "디자인 관련 글3" },
];

function App() {
  const [isMember, setisMemver] = useState(true);
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage title={"좋은회사"} year={2024} />}
          />

          <Route path="/about">
            <Route index element={<AboutPage />} />
            <Route path="team" element={<TeamPage />} />
          </Route>

          <Route path="/service">
            <Route index element={<ServicePage />} />
            <Route path="now" element={<NowPage />} />
          </Route>

          <Route path="/blog" element={<Layout />}>
            <Route index element={<BlogPage data={BlogDatas} />} />
            <Route path=":id" element={<BlogDetailPage />} />
            <Route path="list" element={<BlogListPage />} />
          </Route>
          {/* 존재하지 않는 페이지 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer>
        <p>Copyright 2024 By Hong</p>
        {isMember ? <p>회원입니다.</p> : <p>비회원입니다.</p>}
      </Footer>
    </Router>
  );
}

export default App;

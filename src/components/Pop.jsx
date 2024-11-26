import styled from "@emotion/styled";
import { BodyStyle } from "./pop-style";

const PopupTitle = styled.h1`
  color: red;
  font-size: ${props => props.size || 20}px;
  text-align: center;
`;
const SlideDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;
const BannerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.w || 100}px;
  height: ${props => props.h || 100}px;
  background-color: ${props => props.bg || "red"};
`;

const Pop = () => {
  const title = "팝업 제목";
  const data = "팝업 내용";

  const NoticeDiv = styled.div``;

  return (
    <div>
      <PopupTitle size={"8"}>{title}</PopupTitle>
      <p style={BodyStyle}>{data}</p>
      <SlideDiv>슬라이드</SlideDiv>
      <BannerDiv bg={"yellow"} w={"200"} h={"200"}>
        베너1
      </BannerDiv>
      <BannerDiv bg={"orange"} w={"50"} h={"50"}>
        베너2
      </BannerDiv>
      <BannerDiv>베너3</BannerDiv>
      <NoticeDiv>공지사항</NoticeDiv>
    </div>
  );
};

export default Pop;

import styled from "@emotion/styled";
// 바로가기 영역의 css-in-js
export const LinkDiv = styled.div`
  background-color: ${props => props.bc || "yellowgreen"}!important;
`;
// 제품 출력 css
export const GoodDetailDiv = styled.div`
  h3 {
    color: lightgray;
  }
  img {
    width: 200px;
  }
`;

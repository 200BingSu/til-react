import styled from "@emotion/styled";
import { PacmanLoader } from "react-spinners";
const LoadingDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Loading = () => {
  return (
    <LoadingDiv>
      <PacmanLoader color="#fff139" />
    </LoadingDiv>
  );
};
export default Loading;

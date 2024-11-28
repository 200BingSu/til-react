import styled from "@emotion/styled";
import { useState } from "react";

const Sample3 = () => {
  // 버튼 클릭하면 팝업창 보이기
  const [pop, setpop] = useState(false);
  const PopCSS = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    position: "absolute",
    left: 0,
    top: 0,
  };
  const PopRemoveCSS = {
    display: "none",
  };
  // const ModalWinDiv = styled.div`
  //   position: fixed;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100vh;
  //   background-color: rgba(0, 0, 0, 0.8);
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   z-index: 99;
  // `;

  return (
    <div>
      <button onClick={() => setpop(!pop)}>열기</button>
      {/* pop이 true가 될 경우 나와라 */}
      <div style={pop === true ? PopCSS : PopRemoveCSS}>
        <button onClick={() => setpop(!pop)}>닫기</button>
      </div>
    </div>
  );
};

export default Sample3;

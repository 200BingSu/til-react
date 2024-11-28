import styled from "@emotion/styled";
import React, { useState } from "react";

const Sample5 = () => {
  // 버튼을 클릭하면 배경 색상 바꾸기
  const [bgcolor, setBgColor] = useState("white");
  // emotion
  const StyleDiv = styled.div`
    background-color: ${bgcolor};
    height: 100vh;
  `;
  // bgcolor에 값 덧씌우기
  const changeColor = color => {
    setBgColor(color);
  };

  return (
    <div>
      <StyleDiv>
        색상이 바뀌어요.
        <button onClick={() => changeColor("red")}>빨강</button>
        <button onClick={() => changeColor("yellow")}>노랑</button>
        <button onClick={() => changeColor("blue")}>파랑</button>
      </StyleDiv>
    </div>
  );
};

export default Sample5;

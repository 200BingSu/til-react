import React, { useState } from "react";

const Sample5 = () => {
  // 버튼을 클릭하면 배경 색상 바꾸기
  const [color, setColor] = useState(["red", "blue", "yellow"]);

  return (
    <div>
      <div> 색상이 바뀌어요. </div>

      <button>빨강</button>
      <button>노랑</button>
      <button>파랑</button>
    </div>
  );
};

export default Sample5;

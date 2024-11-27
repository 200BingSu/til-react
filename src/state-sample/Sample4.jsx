import { useState } from "react";

const Sample4 = () => {
  // 좋아요 버튼 싫어요 버튼
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    setGood(good => good + 1);
  };
  const badClick = () => {
    setBad(bad => bad + 1);
  };
  return (
    <div>
      <div>
        <span>좋아요 {good}</span>
        <br />
        <span>싫어요 {bad}</span>
      </div>
      <button onClick={goodClick}>좋아요</button>
      <button onClick={badClick}>싫어요</button>
    </div>
  );
};

export default Sample4;

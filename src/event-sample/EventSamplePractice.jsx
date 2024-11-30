import { useState } from "react";

const EventSamplePractice = () => {
  const originText = "aaaaa";

  const [text, setText] = useState("");
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const second = () => {
    setTime(time => time + 1);
  };

  const gameStart = () => {
    if (start === false) {
      setStart(true);
      //아래는 상태값 gameTime을 참조한다.
      //아래는 실행될 당시의 값이다.
      // 업데이트 하고 있는데 다시 업데이트 시도하면 오류다.
      //그러나 오류가 나도 띄워주지 않고 묻어버린다.
      // 즉시 반영이 안된는 경우가 존재한다.
      // 이유는 언제 업데이트가 되었는지 보장할 수 없다.

      // 아래 ㅂ아식은 state를 업데이트 할 때
      // 값이 아니라 업데이트 함수를 전달하는 것.
      // 아래는 함수라서 항상 실행을 보장합니다.
      setInterval(() => second(), 1000);
      console.log(1);
    }
  };

  return (
    <div>
      <h1>키보드 타이핑 연습</h1>
      <div>
        <p>{originText}</p>
      </div>
      <div>-----------------------------------------</div>
      <div>
        <label htmlFor="inputText">입력</label>
        <textarea
          name="inputtext"
          id="inputText"
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}
          onKeyDown={event => {
            console.log(event.key);
            gameStart();
            if (event.key === "Enter") {
              clearInterval(gameStart);
            }
            // clearInterval(count, 1000));
          }}
        ></textarea>
      </div>
      <div>피드백: {text === "" || originText === text ? "😊" : "😒"}</div>
      <div>입력 시간: {time}</div>
    </div>
  );
};

export default EventSamplePractice;

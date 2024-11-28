import { useState } from "react";

const EventSample2 = () => {
  const originText = "aaaaa";

  const [text, setText] = useState("");
  const [time, setTime] = useState(0);

  const timer = () => {
    clearInterval(setTime(0));
  };

  return (
    <div>
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
            console.log(event.target.value);
            setText(event.target.value);
          }}
        ></textarea>
      </div>
      <div>피드백: {text === "" || originText === text ? "😊" : "😒"}</div>
      <div>입력 시간: {time}</div>
    </div>
  );
};

export default EventSample2;

import React, { useEffect, useState } from "react";

const EventSampleTimer = () => {
  const [time, setTime] = useState(3599);
  const [timer, setTimer] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const second = () => {
    setTime(time => time + 1);
  };
  const startTimer = () => {
    if (timer === false) {
      setTimer(true);
      const addtime = setInterval(() => second(), 1000);
      setIntervalId(addtime);
      console.log("스타트 타이머");
    }
  };

  const stopTimer = () => {
    setTimer(false);
    clearInterval(intervalId);
    console.log("작동 중지");
  };

  const resetTimer = () => {
    setTimer(false);
    setTime(0);
    clearInterval(intervalId);
  };

  const sec = 1;
  const minute = sec * 60;
  const hour = minute * 60;

  const hours = parseInt(time / hour);
  const formatHours = hours > 9 ? String(hours) : `0${hours}`;

  const minutes = parseInt((time % hour) / minute);
  const formatMinutes = minutes > 9 ? String(minutes) : `0${minutes}`;

  const seconds = parseInt((time % hour) % minute);
  const formatSeconds = seconds > 9 ? String(seconds) : `0${seconds}`;
  console.log("고침");
  return (
    <div>
      <h1>타이머</h1>
      <button onClick={() => startTimer()}>시작</button>
      <button onClick={() => stopTimer()}>중지</button>
      <button onClick={() => resetTimer()}>리셋</button>
      <div>
        측정 시간: {formatHours}:{formatMinutes}:{formatSeconds}
      </div>
    </div>
  );
};

export default EventSampleTimer;

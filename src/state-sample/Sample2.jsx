import { useState } from "react";

const Sample2 = () => {
  // 다크모드, 라이트모드 관리
  const [isDark, setIsDark] = useState(false);
  //화면 css object
  const ThemaCSS = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    backgroundColor: isDark ? "#000" : "#fff",
    trabsutition: "all 0.5s",
  };

  return (
    <div style={ThemaCSS}>
      <button
        style={{ width: "100px", height: "100px" }}
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        나쁨
      </button>
    </div>
  );
};

export default Sample2;

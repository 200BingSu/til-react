import { useRef } from "react";

function App() {
  const videoRef = useRef(null);
  const prevV = () => {
    videoRef.current.currentTime -= 10;
  };
  const playV = () => {
    videoRef.current.currentTime = 0;
    videoRef.current;
  };
  const stopV = () => {
    videoRef.current.currentTime = 0;
    videoRef.current;
  };
  const nextV = () => {
    videoRef.current.currentTime += 0;
  };
  return (
    <div>
      <h1>비디오 제어</h1>
      <div>
        <video src="" autoPlay muted controls ref={videoRef} />
      </div>

      <button type="button" onClick={prevV}>
        10초 전
      </button>
      <button type="button" onClick={playV}>
        재생
      </button>
      <button type="button" onClick={stopV}>
        정지
      </button>
      <button type="button" onClick={nextV}>
        10초 후
      </button>
    </div>
  );
}
export default App;

import { useState } from "react";
import Child from "./pages/Child";

const App = () => {
  console.log("App : 리랜더링");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <Child />
    </div>
  );
};
export default App;

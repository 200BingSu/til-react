import { useReducer } from "react";

import { add, minus, reset } from "../../modules/counter/countActions";
import { countReducer } from "../../modules/counter/countReducer";
import { CountInitialState } from "../../modules/counter/counterInitialState";

function Counter() {
  const [countState, dispatch] = useReducer(countReducer, CountInitialState);
  return (
    <div>
      <h1>Counter: {countState.count}</h1>
      <button onClick={() => dispatch(add())}>증가</button>
      <button onClick={() => dispatch(minus())}>감소</button>
      <button onClick={() => dispatch(reset())}>초기화</button>
    </div>
  );
}
export default Counter;

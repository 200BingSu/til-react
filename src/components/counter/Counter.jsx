import { useContext } from "react";
import {
  CounterDispatchContext,
  CounterStateContext,
} from "../../contexts/counterContext";

function Counter() {
  // 앱 전체 context state
  const state = useContext(CounterStateContext);
  // 앱 전체 context dispatch
  const dispatch = useContext(CounterDispatchContext);
  return (
    <div>
      <h1>Counter : {}</h1>
      <button onClick={() => dispatch({ type: "add" })}>증가</button>
      <button onClick={() => dispatch({ type: "minus" })}>감소</button>
      <button onClick={() => dispatch({ type: "reset" })}>초기화</button>
    </div>
  );
}
export default Counter;

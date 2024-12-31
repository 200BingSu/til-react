import { useContext } from "react";
import { TodoDispatchContext } from "../../contexts/todoContext";

function TodoItem({ todo }) {
  const dispatch = useContext(TodoDispatchContext);
  console.log(todo);
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => dispatch({ type: "toggle", payload: todo.id })}
      >
        {todo.id}:{todo.text}
      </span>
      <button
        type="button"
        onClick={() => dispatch({ type: "delete", payload: todo.id })}
      >
        삭제
      </button>
    </div>
  );
}
export default TodoItem;

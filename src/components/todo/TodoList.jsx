import { useContext } from "react";
import { TodoStateContext } from "../../contexts/todoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useContext(TodoStateContext);

  return (
    <div>
      {todos.map(item => (
        <div key={item.id}>
          <TodoItem todo={item} />
        </div>
      ))}
    </div>
  );
}
export default TodoList;

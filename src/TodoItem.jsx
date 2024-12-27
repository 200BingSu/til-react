import React from "react";

const TodoItem = React.memo(({ todo, toggleTodo, deleteTodo }) => {
  console.log("todoitem 리랜더링", todo);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span> {todo.text}</span>
      <button type="button" onClick={() => deleteTodo(todo.id)}>
        삭제
      </button>
    </div>
  );
});

export default TodoItem;

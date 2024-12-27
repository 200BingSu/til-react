import React, { useState } from "react";

const AddTodo = React.memo(({ addTodo }) => {
  console.log("addTodo 리랜더링");
  const [text, setText] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <div>
      <h3>할일 추가</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
});

// esLint 설정을 통해 전체 코드에서 display name을  <Anonymous>로 있어도 빨간줄 지우기 가능.
// AddTodo.displayName = "AddTodo";

export default AddTodo;

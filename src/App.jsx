import React, { useState, useCallback, useRef } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function App() {
  // id 부여를 위한 useRef(initData의 id가 3이라서)
  const totalRef = useRef(3);
  const initData = [
    { id: 1, text: "리액트 공부하기", completed: false },
    { id: 2, text: "운동가기", completed: false },
  ];
  const [todos, setTodos] = useState(initData);

  // useCallback
  // todo 관리 함수를 리랜더링시 재생성 하지 않도록 적용
  const addTodo = useCallback(text => {
    const newId = totalRef.current++;
    setTodos(prev => [...prev, { id: newId, text: text, completed: false }]);
  }, []);
  const toggleTodo = useCallback(id => {
    // const arr = todos.map(item => {
    //   return item.id === id ? { ...item, completed: !item.completed } : item;
    // });
    setTodos(prev =>
      prev.map(item => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      }),
    );
  }, []);
  const deleteTodo = useCallback(id => {
    const arr = todos.filter(item => item.id !== id);
    setTodos(arr);
  }, []);

  return (
    <div>
      <h1>Todo Service</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
export default App;

const TodoList = React.memo(function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}) {
  console.log("todolist 리랜더링");
  return (
    <div>
      <h2>할일 목록</h2>
      <div>
        {todos.map(item => {
          return (
            <TodoItem
              key={item.id}
              todo={item}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
});

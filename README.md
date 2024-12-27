# React.memo

- `컴포넌트`에 리랜더링을 조절해 주는 것.
- 컴포넌트에 props가 바뀌지 않는 한 리랜더링 안됨.
- 성능을 상당히 올려줌
- 회사 프로덕트에서는 리랜더링 횟수를 줄여야 좋다.
- 메모제이션 방안(useMemo, useCallback, React.memo) 중 가장 권장함.

## 기본 예제

```jsx
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
```

## 리액트 프로젝트 메모제이션

- 복잡한 배열요소에 대한 처리는 useMemo를 활용하였고,
- 함수의 재정의를 제어하기 위해 useCallback을 활용하였으며,
- 리랜더링 횟수를 조절하기 이해 React.memo를 적용했습니다.

## 추가 샘플(파일로 컴포넌트 제작시 처리)

```jsx
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
```

import TodoAdd from "./components/todo/TodoAdd";
import TodoList from "./components/todo/TodoList";
import { TodoProvider } from "./contexts/todoProvider";

function App() {
  return (
    // 아래 provider에 의해서 state와 dispatch에 접근가능
    <TodoProvider>
      <TodoAdd />
      <TodoList />
    </TodoProvider>
  );
}
export default App;

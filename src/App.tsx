import TodoInputField from "./components/TodoInputField";
import TodoItemList from "./components/TodoItemList";
import TodoFilter from "./components/TodoFilter";

export default function App() {
  return (
    <>
      <TodoInputField />
      <TodoFilter />
      <TodoItemList />
    </>
  );
}

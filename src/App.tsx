import { useEffect } from "react";
import TodoInputField from "./components/TodoInputField";
import TodoItemList from "./components/TodoItemList";
import TodoFilter from "./components/TodoFilter";
import { getTodosFromFirestore } from "./FIREBASE";
import useAsyncDispatch from "./hook/useAsync";

export default function App() {
  const asyncDispatch = useAsyncDispatch();

  useEffect(() => {
    asyncDispatch({ type: "LOAD_TODO", payload: getTodosFromFirestore });
  }, []);

  return (
    <>
      <TodoInputField />
      <TodoFilter />
      <TodoItemList />
    </>
  );
}

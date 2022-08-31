import { useEffect, useState } from "react";
import TodoInputField from "./components/TodoInputField";
import TodoItemList from "./components/TodoItemList";
import TodoFilter from "./components/TodoFilter";
import { getTodosFromFirestore } from "./FIREBASE";
import useAsyncDispatch from "./hook/useAsync";
import TodoListAppBar from "./components/Appbar";
import { useAuthChanged } from "./utils/login.js";

export default function App() {
  console.log("APP");
  const asyncDispatch = useAsyncDispatch();
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useAuthChanged(setCurrentUser);

  useEffect(() => {
    asyncDispatch({ type: "LOAD_TODO", payload: getTodosFromFirestore });
  }, []);

  return (
    <>
      <TodoListAppBar currentUser={currentUser} />
      <TodoInputField />
      <TodoFilter />
      <TodoItemList />
    </>
  );
}

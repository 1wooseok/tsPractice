import React, { useEffect } from "react";
import TodoInputField from "./components/TodoInputField";
import TodoItemList from "./components/TodoItemList";
import TodoFilter from "./components/TodoFilter";
import { getTodosFromFirestore } from "./FIREBASE";
import useAsyncDispatch from "./hook/useAsync";
import TodoListAppBar from "./components/Appbar";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const currentUser = useAuth();
  const asyncDispatch = useAsyncDispatch();

  useEffect(() => {
    if (currentUser) {
      asyncDispatch({
        type: "LOAD_TODO",
        payload: () => getTodosFromFirestore(currentUser),
      });
    }
  }, [currentUser]);

  return (
    <>
      <TodoListAppBar />
      {currentUser ? (
        <>
          <TodoInputField />
          <TodoFilter />
          <TodoItemList />
        </>
      ) : (
        <h3>로그인 후 사용해주세요</h3>
      )}
    </>
  );
}

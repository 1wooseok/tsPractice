import React from "react";
import TodoItem from "./TodoItem";
import useFilteredTodo from "../hook/useFIlteredTodo";
import CircularProgress from "@mui/material/CircularProgress";

function TodoItemList() {
  const { loading, todos, error } = useFilteredTodo();

  // if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>An Error Occuered</h3>;
  if (todos && todos.length === 0) return <h3>* No TodoItem</h3>;

  return (
    <ul>
      {todos?.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} />
      ))}
      {loading && <CircularProgress />}
    </ul>
  );
}

export default React.memo(TodoItemList);

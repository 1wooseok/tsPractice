import React from "react";
import TodoItem from "./TodoItem";
import useFilteredTodo from "../hook/useFIlteredTodo";

function TodoItemList() {
  const filteredTodos = useFilteredTodo();
  console.log(filteredTodos);
  if (!filteredTodos) return <h1>Loading...</h1>;

  return (
    <ul>
      {filteredTodos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default React.memo(TodoItemList);

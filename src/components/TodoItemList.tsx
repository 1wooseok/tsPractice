import React from "react";
import { useTodoContext } from "../context/TodoContext";
import { Todo } from "../types/TodoType";
import TodoItem from "./TodoItem";

function TodoItemList() {
  const { todos, filter } = useTodoContext();

  const getFilteredTodos = (): Todo[] => {
    switch (filter) {
      case "ALL":
        return todos;
      case "DONE":
        return todos.filter((todo) => todo.done);
      case "YET":
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  };

  return (
    <ul>
      {getFilteredTodos().map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default React.memo(TodoItemList);

import React from "react";
import { Todo } from "../App";
import TodoItem from "./TodoItem";
import { Filter } from "../App";

interface TodoListProps {
  todos: Todo[];
  filter: Filter;
  handleCheck: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, value: string) => void;
}

function TodoItemList(props: TodoListProps) {
  const { todos, filter, handleCheck, deleteTodo, updateTodo } = props;

  const getFilteredTodos = (filter: Filter) => {
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
      {getFilteredTodos(filter).map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default React.memo(TodoItemList);

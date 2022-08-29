import React from "react";
import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  handleCheck: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, value: string) => void;
}

function TodoItemList(props: TodoListProps) {
  const { todos, handleCheck, deleteTodo, updateTodo } = props;

  return (
    <ul>
      {todos.map((todo) => (
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

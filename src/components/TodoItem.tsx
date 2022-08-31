import { useCallback } from "react";
import { removeTodoFromFirestore, toggleTodoFromFirestore } from "../FIREBASE";
import useAsyncDispatch from "../hook/useAsync";
import { Todo } from "../types/TodoType";
import { Button } from "@mui/material";
import "../styles/todoStyle.css";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const asyncDispatch = useAsyncDispatch();

  const removeTodo = useCallback(() => {
    asyncDispatch({
      type: "REMOVE_TODO",
      payload: () => removeTodoFromFirestore(todo.id),
      data: todo.id,
    });
  }, [todo.id]);

  const toggleTodo = useCallback(() => {
    asyncDispatch({
      type: "TOGGLE_TODO",
      payload: () => toggleTodoFromFirestore(todo.id, todo.done),
      data: todo.id,
    });
  }, [todo.done, todo.id]);

  return (
    <li className={todo.done ? "done" : ""}>
      <input type="checkbox" checked={todo.done} onChange={toggleTodo} />
      <span>{todo.text}</span>
      <span>( {todo.date} )</span>
      <Button onClick={removeTodo}>DEL</Button>
    </li>
  );
}

export default TodoItem;

// import React, { useState, useRef } from "react";
import { removeTodoFromFirestore, toggleTodoFromFirestore } from "../FIREBASE";
// import { useTodoDispatch } from "../context/TodoContext";
import useAsyncDispatch from "../hook/useAsync";
import { Todo } from "../types/TodoType";
import { Button } from "@mui/material";
import "../styles/todoStyle.css";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  // const timer = useRef<number | null>(null);
  const asyncDispatch = useAsyncDispatch();
  // const dispatch = useTodoDispatch();

  const removeTodo = () => {
    asyncDispatch({
      type: "REMOVE_TODO",
      payload: () => removeTodoFromFirestore(todo.id),
    });
  };

  const toggleTodo = () => {
    asyncDispatch({
      type: "TOGGLE_TODO",
      payload: () => toggleTodoFromFirestore(todo.id, todo.done),
    });
  };

  // const updateTodo = (text: string) => {
  //   dispatch({ type: "UPDATE_TODO", payload: { id: todo.id, text } });
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLSpanElement>) => {
  //   if (e.target.textContent === todo.text) {
  //     return;
  //   }
  //   if (timer.current) {
  //     clearTimeout(timer.current);
  //   }
  //   timer.current = setTimeout(() => {
  //     updateTodo(e.target.textContent || "");
  //   }, 200);
  // };

  // const isDone = todo.done ? { textDecoration: "line-through !important" } : {};

  return (
    <li className={todo.done ? "done" : ""}>
      <input type="checkbox" checked={todo.done} onChange={toggleTodo} />
      <span>{todo.text}</span>
      <span>( {todo.date} )</span>
      <Button
        sx={{
          border: "1px solid black",
          marginLeft: "10px",
        }}
        onClick={removeTodo}
      >
        DEL
      </Button>
    </li>
  );
}

export default TodoItem;

import React, { useState, useRef } from "react";
import { Todo } from "../types/TodoType";
import { useTodoDispatch } from "../context/TodoContext";
import "../styles/todoStyle.css";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const timer = useRef<number | null>(null);
  const dispatch = useTodoDispatch();
  const [editable, setEditable] = useState<boolean>(false); // focus가 Out 되면 false로 다시 바꿔야 함.

  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };

  const updateTodo = (text: string) => {
    dispatch({ type: "UPDATE_TODO", payload: { id: todo.id, text } });
  };

  const toggleCheck = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSpanElement>) => {
    if (e.target.textContent === todo.text) {
      return;
    }
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      updateTodo(e.target.textContent || "");
    }, 200);
  };

  return (
    <li className={todo.done ? "done" : ""}>
      <input type="checkbox" checked={todo.done} onChange={toggleCheck} />
      <span contentEditable onInput={handleChange}>
        {todo.text}
      </span>
      <span>( {todo.date} )</span>
      <button onClick={deleteTodo}>DEL</button>
    </li>
  );
}

export default TodoItem;

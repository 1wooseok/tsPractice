import React, { useRef } from "react";
import { Todo } from "../types/TodoType";
import { useTodoDispatch } from "../context/TodoContext";
import "../styles/todoStyle.css";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const timer = useRef<number | null>(null);

  const dispatch = useTodoDispatch();

  const { id, done, text, date } = todo;

  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const updateTodo = (text: string | null) => {
    dispatch({ type: "UPDATE_TODO", payload: { id, text } });
  };

  const toggleCheck = () => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSpanElement>) => {
    if (e.target.textContent === text) {
      return;
    }

    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      updateTodo(e.target.textContent);
    }, 200);
  };

  return (
    <li className={done ? "done" : ""}>
      <input type="checkbox" checked={done} onChange={toggleCheck} />
      <span contentEditable onInput={handleChange}>
        {text}
      </span>
      <span>( {date} )</span>
      <button onClick={deleteTodo}>DEL</button>
    </li>
  );
}

export default TodoItem;

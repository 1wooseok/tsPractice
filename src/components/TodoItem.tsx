import React, { useRef } from "react";
import "../styles/todoStyle.css";

function TodoItem(props: any) {
  const timer = useRef<number | null>(null);

  const { handleCheck, deleteTodo, updateTodo } = props;
  const { id, text, done, date } = props.todo;

  const handleChange = (e: React.ChangeEvent<HTMLSpanElement>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      updateTodo(id, e.target.textContent);
    }, 200);
  };

  return (
    <li className={done ? "done" : ""}>
      <input type="checkbox" checked={done} onChange={() => handleCheck(id)} />
      <span contentEditable onInput={handleChange}>
        {text}
      </span>
      <span>( {date} )</span>
      <button onClick={() => deleteTodo(id)}>DEL</button>
    </li>
  );
}

export default TodoItem;

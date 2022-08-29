import React, { useState } from "react";
import "../styles/todoStyle.css";

function TodoItem(props: any) {
  const [editable, setEditable] = useState<boolean>(false);

  const { handleCheck, deleteTodo, updateTodo } = props;
  const { id, text, done, date } = props.todo;

  const handleDbClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    setEditable((prev) => !prev);
    e.target.focus();
  };

  return (
    <li className={done ? "done" : ""}>
      <input type="checkbox" checked={done} onChange={() => handleCheck(id)} />
      <span contentEditable={editable} onDoubleClick={handleDbClick}>
        {text}
      </span>
      <span>( {date} )</span>
      <button onClick={() => deleteTodo(id)}>DEL</button>
    </li>
  );
}

export default TodoItem;

// db클릭시 editable true,
// 입력 완료시 list update
//

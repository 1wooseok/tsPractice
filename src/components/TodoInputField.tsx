import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useTodoDispatch } from "../context/TodoContext";

function TodoInputField() {
  const dispatch = useTodoDispatch();
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTodo = (): void => {
    if (!input) {
      return;
    }
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <>
      <TextField name="input" value={input} onChange={handleChange} />
      <Button onClick={addTodo}>ADD</Button>
    </>
  );
}

export default TodoInputField;

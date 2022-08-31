import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { addTodoFromFireStore } from "../FIREBASE";
import useAsyncDispatch from "../hook/useAsync";

function TodoInputField() {
  const asyncDispatch = useAsyncDispatch();
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTodo = (): void => {
    if (!input || input.length === 0) {
      return;
    }
    setInput("");
    asyncDispatch({
      type: "ADD_TODO",
      payload: () => addTodoFromFireStore(input),
    });
  };

  return (
    <>
      <TextField
        label="Add-Todo"
        name="input"
        value={input}
        onChange={handleChange}
      />
      <Button onClick={addTodo}>ADD</Button>
    </>
  );
}

export default TodoInputField;

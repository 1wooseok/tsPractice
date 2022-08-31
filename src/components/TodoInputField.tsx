import React, { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";
import { addTodoFromFireStore } from "../FIREBASE";
import useAsyncDispatch from "../hook/useAsync";
import { useAuth } from "../context/AuthContext";
{
  /* <Box sx={{margin: "auto"}}>
+      <Stack direction="row" spacing={2} justifyContent="center">
+        <TextField
+          id="todo-item-input"
+          label="Todo Item"
+          variant="outlined"
+          onChange={(e) => setInput(e.target.value)} value={input}
+        />
+        <Button variant="outlined" onClick={onSubmit}>Submit</Button>
+      </Stack>
+    </Box> */
}

function TodoInputField() {
  const asyncDispatch = useAsyncDispatch();
  const [input, setInput] = useState<string>("");
  const currentUser = useAuth();

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
      payload: () => addTodoFromFireStore(input, currentUser),
    });
  };

  return (
    <Box sx={{ margin: "50px auto" }}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <TextField
          label="Add-Todo"
          name="input"
          value={input}
          onChange={handleChange}
        />
        <Button onClick={addTodo}>ADD</Button>
      </Stack>
    </Box>
  );
}

export default TodoInputField;

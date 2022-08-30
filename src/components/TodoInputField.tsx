import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useTodoDispatch } from "../context/TodoContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FIREBASE";
import { Todo } from "../types/TodoType";
import useAsyncDispatch from "../hook/useAsync";

function TodoInputField() {
  // const dispatch = useTodoDispatch();
  const asyncDispatch = useAsyncDispatch();
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // const addTodo = async (): Promise<void> => {
  //   if (!input) {
  //     return;
  //   }
  //   dispatch({ type: "LOADING" });
  //   try {
  //     const docRef = await addDoc(collection(db, "todoItem"), {
  //       todoItemContent: {
  //         text: input,
  //         date: new Date().toDateString(),
  //       },
  //       done: false,
  //     });

  //     const newTodoItem: Todo = {
  //       id: docRef.id,
  //       text: input,
  //       done: false,
  //       date: new Date().toDateString(),
  //     };

  //     dispatch({ type: "ADD_TODO", payload: newTodoItem });
  //     setInput("");
  //   } catch (err) {
  //     dispatch({ type: "ERROR", payload: err });
  //   }
  // };
  const test = async (): Promise<Todo> => {
    setInput("");
    const docRef = await addDoc(collection(db, "todoItem"), {
      todoItemContent: {
        text: input,
        date: new Date().toDateString(),
      },
      done: false,
    });

    return {
      id: docRef.id,
      text: input,
      done: false,
      date: new Date().toDateString(),
    };
  };

  const addTodo = () => {
    asyncDispatch({ type: "ADD_TODO", payload: test });
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

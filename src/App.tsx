import React, { useState, useCallback } from "react";
import TodoItemList from "./components/TodoItemList";
import TodoInputField from "./components/TodoInputField";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  date: string;
}

function App() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleCheck = useCallback(
    (id) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );

      setTodos(newTodos);
    },
    [todos]
  );

  const deleteTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const updateTodo = useCallback((id, value) => {
    // update todo;
    console.log(id, value);
  }, []);

  const handleSubmit = () => {
    if (!input) return;

    addTodo();
    setInput("");
  };

  const addTodo = (): void => {
    const todoItem: Todo = {
      id: createId(),
      text: input,
      done: false,
      date: new Date().toDateString(),
    };

    setTodos((prev) => [...prev, todoItem]);
  };

  return (
    <div className="App">
      <TodoInputField
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoItemList
        todos={todos}
        handleCheck={handleCheck}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;

let cnt = 0;
function createId() {
  return ++cnt;
}

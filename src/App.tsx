import React, { useState, useCallback } from "react";
import TodoItemList from "./components/TodoItemList";
import TodoInputField from "./components/TodoInputField";
import TodoFilter from "./components/TodoFilter";
import { Todo, Filter } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<Filter>(Filter.ALL);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleCheck = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    },
    [todos]
  );

  const deleteTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const updateTodo = (id: number, value: string) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, text: value } : todo
    );
    setTodos(updatedTodo);
  };

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
      <TodoFilter setFilter={setFilter} />
      <TodoItemList
        todos={todos}
        filter={filter}
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

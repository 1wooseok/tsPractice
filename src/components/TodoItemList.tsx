import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/TodoType";
import useFilteredTodo from "../hook/useFIlteredTodo";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";

function TodoItemList() {
  const { loading, todos, error } = useFilteredTodo();

  if (!loading.status) {
    if (error) return <h3>An Error Occuered</h3>;
    if (todos && todos.length === 0)
      return (
        <>
          <h3>* No TodoItem</h3>
        </>
      );
  }

  let template;
  if (loading.status) {
    switch (loading.data.type) {
      case "LOAD_TODO":
        template = <CircularProgress />;
        break;
      case "ADD_TODO":
        template = (
          <>
            <TodoList todos={todos} />
            <CircularProgress
              size="1.5rem"
              sx={{ position: "absolute", left: "40%" }}
            />
          </>
        );
        break;
      case "REMOVE_TODO":
        template = (
          <>
            {todos.map((todo, idx) =>
              todo.id === loading.data.payload ? (
                <CircularProgress
                  key={idx}
                  size="1.5rem"
                  sx={{ position: "absolute", left: "40%" }}
                />
              ) : (
                <TodoItem key={idx} todo={todo} />
              )
            )}
          </>
        );
        break;
      case "TOGGLE_TODO":
        template = (
          <>
            {todos.map((todo, idx) =>
              todo.id === loading.data.payload ? (
                <li key={idx} className={todo.done ? "done" : ""}>
                  <CircularProgress size="0.8rem" sx={{ margin: "3px" }} />
                  <span>{todo.text}</span>
                  <span>( {todo.date} )</span>
                  <Button>DEL</Button>
                </li>
              ) : (
                <TodoItem key={idx} todo={todo} />
              )
            )}
          </>
        );
        break;
      default:
        template = <TodoList todos={todos} />;
        break;
    }
  }

  return <ul>{template ? template : <TodoList todos={todos} />}</ul>;
}

export default React.memo(TodoItemList);

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <>
      {todos.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} />
      ))}
    </>
  );
}

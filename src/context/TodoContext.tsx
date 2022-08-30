import React, { useContext, useReducer } from "react";
import { TodoReducer, initialState } from "./todoReducer";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  date: string;
}

export enum Filter {
  ALL = "ALL",
  DONE = "DONE",
  YET = "YET",
}

interface TodoContextInterface {
  todos: Todo[];
  filter: Filter;
}
const TodoContext = React.createContext<TodoContextInterface | null>(null);

// hack
const TodoDispatch = React.createContext<any>(null);

export const TodoContextProvider = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoDispatch.Provider value={dispatch}>
      <TodoContext.Provider value={todos}></TodoContext.Provider>
    </TodoDispatch.Provider>
  );
};

export const useTodoContext = () => {
  const todos = useContext(TodoContext);
  return todos;
};

export const useTodoDispatch = () => {
  const dispatch = useContext(TodoDispatch);
  return dispatch;
};

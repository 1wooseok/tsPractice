import React, { ReactNode, useContext, useReducer } from "react";
import { TodoReducer, initialState } from "./todoReducer";
import { Todo, Filter } from "../types/TodoType";

interface TodoContextInterface {
  todos: Todo[];
  filter: Filter;
}
const TodoContext = React.createContext<TodoContextInterface>({
  todos: [],
  filter: Filter.ALL,
});

// hack
const TodoDispatch = React.createContext<any>(null);

interface TodoContextProps {
  children: ReactNode;
}
export const TodoContextProvider = ({ children }: TodoContextProps) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <TodoDispatch.Provider value={dispatch}>
      <TodoContext.Provider value={state}>{children}</TodoContext.Provider>
    </TodoDispatch.Provider>
  );
};

export const useTodoContext = () => {
  const state = useContext(TodoContext);
  return state;
};

export const useTodoDispatch = () => {
  const dispatch = useContext(TodoDispatch);
  return dispatch;
};

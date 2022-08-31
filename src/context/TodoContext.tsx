import React, { ReactNode, useContext, useReducer } from "react";
import { TodoReducer, initialState } from "./todoReducer";
import { TodoReducerStateInterface } from "../types/TodoType";
import { ContextProps } from "../types/ContextType";

const TodoContext =
  React.createContext<TodoReducerStateInterface>(initialState);
// hack
const TodoDispatch = React.createContext<any>(null);

export const TodoContextProvider = ({ children }: ContextProps) => {
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

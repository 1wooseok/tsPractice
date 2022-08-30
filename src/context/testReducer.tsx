// 로딩처리 하기
import { Todo, Filter, TodoStateInterface } from "../types/TodoType";

export const initialState: TodoStateInterface = {
  todos: [],
  filter: Filter.ALL,
};

type ACTIONS =
  | { type: "LOADING" }
  | { type: "ERROR"; payload: any }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "UPDATE_TODO"; payload: { id: string; text: string } }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "SET_FILTER"; payload: Filter };

interface TodoReducerStateInterface {
  loading: boolean;
  data: null | { todos: Todo[]; filter: Filter };
  error: null | any;
}

const loading = (data: any) => {
  return {
    loading: true,
    data: data,
    error: null,
  };
};

const success = (data: any) => {
  return {
    loading: false,
    data: data,
    error: null,
  };
};

const error = (err: any) => {
  return {
    loading: true,
    data: null,
    error: err,
  };
};

export function TodoReducer(
  state: typeof initialState,
  action: ACTIONS
): TodoReducerStateInterface {
  switch (action.type) {
    default:
      return state;
  }
}

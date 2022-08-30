// 로딩처리 하기
import { Todo, Filter, TodoReducerStateInterface } from "../types/TodoType";

export const initialState: TodoReducerStateInterface = {
  loading: true,
  data: { todos: [], filter: Filter.ALL },
  error: null,
};

type ACTIONS =
  | { type: "LOADING" }
  | { type: "ERROR"; payload: any }
  | { type: "ADD_TODO"; payload: any }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "UPDATE_TODO"; payload: { id: string; text: string } }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "SET_FILTER"; payload: Filter };

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

const error = (err: any, data: any) => {
  return {
    loading: true,
    data,
    error: err,
  };
};

export function TodoReducer(
  state: typeof initialState,
  action: ACTIONS
): TodoReducerStateInterface {
  switch (action.type) {
    case "LOADING":
      return loading(state.data);
    case "ERROR":
      return error(action.payload, state.data);
    case "ADD_TODO":
      return success({
        todos: [...state?.data?.todos, action.payload],
        filter: state.data.filter,
      });
    default:
      return state;
  }
}

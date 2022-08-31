// 로딩처리 하기
import { Todo, Filter } from "../types/TodoType";

interface TodoReducerStateInterface {
  loading: boolean;
  data: { todos: Todo[]; filter: Filter };
  error: null | any;
}

export const initialState: TodoReducerStateInterface = {
  loading: false,
  data: { todos: [], filter: Filter.ALL },
  error: null,
};

type ACTIONS =
  | { type: "LOADING" }
  | { type: "ERROR"; payload: any }
  | { type: "LOAD_TODO"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "REMOVE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "SET_FILTER"; payload: Filter };
// | { type: "UPDATE_TODO"; payload: { id: string; text: string } }

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
    case "LOAD_TODO":
      console.log("씨발", action.type);
      return success({
        todos: action.payload,
        filter: state.data.filter,
      });
    case "ADD_TODO":
      return success({
        todos: [...state.data.todos, action.payload],
        filter: state.data.filter,
      });
    case "REMOVE_TODO":
      return success({
        todos: state.data.todos.filter((todo) => todo.id !== action.payload),
        filter: state.data.filter,
      });
    case "TOGGLE_TODO":
      return success({
        todos: state.data.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
        filter: state.data.filter,
      });
    case "SET_FILTER":
      return success({
        ...state.data,
        filter: action.payload,
      });
    default:
      return state;
  }
}

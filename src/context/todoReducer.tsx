// 로딩처리 하기
import { Todo, Filter, TodoReducerStateInterface } from "../types/TodoType";

export const initialState: TodoReducerStateInterface = {
  loading: { status: true, data: { type: "LOAD_TODO" } },
  data: { todos: [], filter: Filter.ALL },
  error: null,
};

type ACTIONS =
  | { type: "LOADING"; data: { type?: string; data?: any } }
  | { type: "ERROR"; payload: any }
  | { type: "LOAD_TODO"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "REMOVE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "SET_FILTER"; payload: Filter };

const loading = (data: any, prevData?: any) => {
  return {
    loading: { status: true, data: prevData },
    data: data,
    error: null,
  };
};

const success = (data: any) => {
  return {
    loading: { status: false },
    data: data,
    error: null,
  };
};

const error = (err: any, data: any) => {
  return {
    loading: { status: false },
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
      return loading({ ...state.data }, action.data);
    case "ERROR":
      return error(action.payload, { ...state.data });
    case "LOAD_TODO":
      return success({
        ...state.data,
        todos: action.payload,
      });
    case "ADD_TODO":
      return success({
        ...state.data,
        todos: [...state.data.todos, action.payload],
      });
    case "REMOVE_TODO":
      return success({
        ...state.data,
        todos: state.data.todos.filter((todo) => todo.id !== action.payload),
      });
    case "TOGGLE_TODO":
      return success({
        ...state.data,
        todos: state.data.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
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

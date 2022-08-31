export interface Todo {
  id: string;
  text: string;
  done: boolean;
  date: string;
  userId: string;
}

export enum Filter {
  ALL = "ALL",
  DONE = "DONE",
  YET = "YET",
}

export interface TodoStateInterface {
  todos: Todo[];
  filter: Filter;
}

export interface TodoReducerStateInterface {
  loading: { status: boolean, data: { type: string, payload?: any } };
  data: TodoStateInterface;
  error: null | any;
}
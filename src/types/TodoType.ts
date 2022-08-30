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

export interface TodoStateInterface {
  todos: Todo[];
  filter: Filter;
}
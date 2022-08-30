export interface Todo {
  id: string;
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
  todos: Todo[] | null;
  filter: Filter | null;
}
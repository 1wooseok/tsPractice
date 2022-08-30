import { useTodoDispatch } from "../context/TodoContext";

interface asyncAction {
  type: string;
  payload: () => Promise<any> | null;
}

export default function useAsyncDispatch() {
  const dispatch = useTodoDispatch();

  const asyncDispatch = async (action: asyncAction): Promise<any> => {
    dispatch({ type: "LOADING" });
    try {
      const data = await action.payload();
      dispatch({ type: action.type, payload: data });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };

  return asyncDispatch;
}

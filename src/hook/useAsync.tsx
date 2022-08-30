import { useTodoDispatch } from "../context/TodoContext";

export default function useAsyncDispatch() {
  const dispatch = useTodoDispatch();

  const asyncDispatch = async (
    type: string,
    callback: () => Promise<any>
  ): Promise<any> => {
    dispatch({ type: "LOADING" });
    try {
      const payload = await callback();
      dispatch({ type, payload });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };

  return asyncDispatch;
}

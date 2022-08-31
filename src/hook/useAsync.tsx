import { useTodoDispatch } from "../context/TodoContext";

interface asyncAction {
  type: string;
  payload: () => Promise<any> | null;
  data?: any;
}

export default function useAsyncDispatch() {
  const dispatch = useTodoDispatch();

  const asyncDispatch = async (action: asyncAction): Promise<any> => {
    // console.log("In asyncDispatch", action);
    dispatch({
      type: "LOADING",
      data: { type: action.type, payload: action.data },
    });
    try {
      const data = await action.payload();
      dispatch({ type: action.type, payload: data });
    } catch (err) {
      console.error("firestore error ", err);
      dispatch({ type: "ERROR", payload: err });
    }
  };

  return asyncDispatch;
}

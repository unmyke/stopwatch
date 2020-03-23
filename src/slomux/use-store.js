import { useContext, useEffect, useState } from "react";
import StoreContext from "./store-context";


const useStore = () => {
  const [, setState] = useState({});
  const forceUpdate = () => setState({});

  const { getState, dispatch, subscribe, unsubscribe } = useContext(StoreContext);

  useEffect(() => {
    subscribe(forceUpdate);
    return () => unsubscribe(forceUpdate);
  });

  return { getState, dispatch };
}
export default useStore;
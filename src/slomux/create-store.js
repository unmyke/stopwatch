const GET_INITIAL_STATE = "GET_INITIAL_STATE";

const createStore = (reducer, initialState) => {
  let currentState =
    initialState || reducer(undefined, { type: GET_INITIAL_STATE });
  let listeners = [];

  const getState = () => currentState;

  const dispatch = action => {
    currentState = reducer(currentState, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners = [...listeners, listener];
  };

  const unsubscribe = listener => {
    listeners = listeners.filter(
      currentListener => currentListener !== listener
    );
  };

  return { getState, dispatch, subscribe, unsubscribe };
};

export default createStore;

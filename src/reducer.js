import { CHANGE_INTERVAL } from "./actions";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      return state <= -action.payload ? 0 : state + action.payload;
    default:
      return state;
  }
};

export default reducer;

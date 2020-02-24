// actions
const INCREASE_TIME = "INCREASE_TIME";
const UPDATE_INTERVAL_ID = "INCREASE_TIME";
const RESET = "RESET";

// action creators
export const increaseTime = currentInterval => ({
  type: INCREASE_TIME,
  payload: { currentInterval }
});

export const updateIntervalId = nextIntervalId => ({
  type: UPDATE_INTERVAL_ID,
  payload: { nextIntervalId }
});

export const reset = () => ({ type: RESET });

// reducers
export const initialTime = 0;
export const timeReducer = (currentTime = initialTime, { type, payload }) => {
  switch (type) {
    case INCREASE_TIME:
      const { currentInterval } = payload;
      const nextTime = currentTime + currentInterval;
      return nextTime;
    case RESET:
      return initialTime;
    default:
      return currentTime;
  }
};

export const initialIntervalId = 0;
export const intervalIdReducer = (
  currentIntervalId = initialIntervalId,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_INTERVAL_ID:
      const { nextIntervalId } = payload;
      return nextIntervalId;
    case RESET:
      return initialIntervalId;
    default:
      return currentIntervalId;
  }
};

import { useReducer } from "react";
import {
  timeReducer,
  initialTime,
  intervalIdReducer,
  initialIntervalId,
  increaseTime,
  updateIntervalId,
  reset
} from "./reducers";

const useTimerReducer = () => {
  const [currentTime, dispatchToTimeReducer] = useReducer(
    timeReducer,
    initialTime
  );
  const [currentIntervalId, dispatchToIntervalIdReducer] = useReducer(
    intervalIdReducer,
    initialIntervalId
  );
  const dispatchIncreaseTime = currentInterval => {
    dispatchToTimeReducer(increaseTime(currentInterval));
  };
  const dispatchUpdateIntervalId = nextIntervalId => {
    dispatchToIntervalIdReducer(updateIntervalId(nextIntervalId));
  };
  const dispatchReset = () => {
    const resetAction = reset();
    dispatchToTimeReducer(resetAction);
    dispatchToIntervalIdReducer(resetAction);
  };

  return [
    { currentTime, currentIntervalId },
    { dispatchIncreaseTime, dispatchUpdateIntervalId, dispatchReset }
  ];
};

export default useTimerReducer;

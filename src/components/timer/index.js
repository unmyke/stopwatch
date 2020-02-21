import { connect } from "../../slomux";

import TimerComponent from "./component";

const Timer = connect(
  state => ({
    currentInterval: state
  }),
  () => {}
)(TimerComponent);

export default Timer;

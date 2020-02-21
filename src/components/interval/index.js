import { connect } from "../../slomux";
import { changeInterval } from "../../actions";

import IntervalComponent from "./component";

const Interval = connect(
  dispatch => ({
    changeInterval: value => dispatch(changeInterval(value))
  }),
  state => ({
    currentInterval: state
  })
)(IntervalComponent);

export default Interval;

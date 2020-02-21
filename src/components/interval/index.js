import { connect } from "../../slomux";
import { changeInterval } from "../../actions";

import IntervalComponent from "./component";

const Interval = connect(
  state => ({
    currentInterval: state
  }),
  dispatch => ({
    changeInterval: value => dispatch(changeInterval(value))
  })
)(IntervalComponent);

export default Interval;

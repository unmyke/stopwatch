import React from "react";
import ReactDOM from "react-dom";

import reducer from "./reducer";
import { Provider, createStore } from "./slomux";

import { Timer } from "./components";

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Timer />
  </Provider>,
  document.getElementById("app")
);

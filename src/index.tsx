import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { Hello } from "./components/Hello";
import { AppLayout } from "./components/AppLayout";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout}></Route>
  </Router>,
  document.getElementById("app")
);
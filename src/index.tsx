import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#configuring-your-server
// browserHistory makes a request to the server on refresh

import { AppLayout } from "./components/AppLayout";
import { Teacher } from "./components/resources/Teacher";
import { Classroom } from "./components/resources/Classroom";
import { EmptyView } from "./components/resources/EmptyView";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={EmptyView}/>
      <Route path="/teacher" component={Teacher}/>
      <Route path="/classroom" component={Classroom}/>
    </Route>
  </Router>,
  document.getElementById("app")
);
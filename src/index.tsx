import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { AppLayout } from "./components/AppLayout";
import { Teacher } from "./components/resources/Teacher";
import { Classroom } from "./components/resources/Classroom";
import { EmptyView } from "./components/resources/EmptyView";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={EmptyView}/>
      <Route path="/teacher" component={Teacher}/>
      <Route path="/classroom" component={Classroom}/>
    </Route>
  </Router>,
  document.getElementById("app")
);
import * as React from "react";

import { Router, Route, hashHistory } from "react-router";
import { Resource } from "./Resource";
import { HomeLink } from "./HomeLink";

export class AppLayout extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div className="display-flex">
          <div id="menu" className="one-tenth">menu</div>
          <div id="nav">
            <div id="resources" className="display-flex">
              <HomeLink name="Home" path="/"></HomeLink>
              <Resource name="Teacher" path="teacher"></Resource>
              <Resource name="Classroom" path="classroom"></Resource>
            </div>
            <div id="search">search</div>
          </div>
        </div>

        <div className="display-flex">
          <div id="actions" className="one-tenth">actions</div>
          <div id="main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

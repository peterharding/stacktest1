import * as React from "react";
import { IndexLink } from "react-router";

export class HomeLink extends React.Component<any, any> {
  render() {
    return (
      <IndexLink to={this.props.path} activeClassName="active-nav">
        <button>{this.props.name}</button>
      </IndexLink>
    );
  }
}

import * as React from "react";
import { Link } from "react-router";

export interface ResourceProps { name: string; path: string; }

export class Resource extends React.Component<ResourceProps, {}> {
  render() {
    return (
      <Link to={this.props.path} activeClassName="active-nav">
        <button>{this.props.name}</button>
      </Link>
    );
  }
}

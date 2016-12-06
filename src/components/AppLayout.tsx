import * as React from "react";

export class AppLayout extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div className="display-flex">
          <div id="menu" className="one-tenth">menu</div>
          <div id="nav">
            <div id="resources" className="display-flex">
              <div>Teacher</div>
              <div>Classroom</div>
            </div>
            <div id="search">search</div>
          </div>
        </div>

        <div className="display-flex">
          <div id="actions" className="one-tenth">actions</div>
          <div id="main">main</div>
        </div>
      </div>
    );
  }
}

import * as React from "react";

interface Person {
  id: number;
  name: string;
  active: boolean;
}

export class StateTest extends React.Component<any, any> {
  render() {
    var self = this;
    return (
      <ul className="user-list">
        {this.props.users.map(function(user: Person) {
          return (
            <li key={user.id}>
              <span>{user.name} = </span>
              <span>{user.active ? 'Active' : 'Not Active'} - </span>
              <button onClick={self.props.toggleActive.bind(null, user.id)}>Toggle Active</button>
            </li>
            );
        })}
      </ul>
    );
  }
}
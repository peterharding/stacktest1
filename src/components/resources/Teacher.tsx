import * as React from "react";
import * as _ from "lodash";
import { StateTest } from "./StateTest";

interface Person {
  id: number;
  name: string;
  active: boolean;
}

// container test
export class Teacher extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 1, name: 'Bryan', active:true },
        { id: 2, name: 'Peter', active:true },
        { id: 3, name: 'Prashant', active:true }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>teacher component!</h2>
        <StateTest users={this.state.users} toggleActive={this.toggleActive.bind(this)} />
      </div>
    );
  }

  toggleActive(userId: number) {
    console.log('start toggle', this.state);

    var newState = _.clone(this.state);
    var user = _.find(newState.users, { id: userId }) as Person;
    user.active = !user.active;
    this.setState(newState);

    console.log('after toggle', this.state);
  }
}

import React, { PureComponent } from "react";

export default class InnerList extends PureComponent {
  render() {
    return this.props.tasks.map((task, index) => {
      <Task key={task.id} task={task} index={index} />;
    });
  }
}

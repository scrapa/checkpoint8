import React from "react";
export default class Adam extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "welcome ghassen"
    };
  }
  changeMessage() {
    this.setState({
      message: "good bye"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>khello</button>
      </div>
    );
  }
}

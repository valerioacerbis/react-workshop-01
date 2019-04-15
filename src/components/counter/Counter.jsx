import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    let button;
    const { count } = this.state;

    count > 0
      ? (button = (
          <React.Fragment>
            <button
              onClick={this.handleIncrement}
              className="counter__button counter__button--primary"
            >
              Another one!
            </button>
            <button
              onClick={this.handleDecrement}
              className="counter__button counter__button--secondary"
            >
              No, I suck!
            </button>
          </React.Fragment>
        ))
      : (button = (
          <React.Fragment>
            <button onClick={this.handleIncrement} className="counter__button">
              I want one!
            </button>
          </React.Fragment>
        ));

    return (
      <div className="counter">
        <div className="counter__text counter__text--primary"> {count} </div>
        {button}
      </div>
    );
  }
}

export default Counter;

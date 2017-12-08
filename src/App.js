import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.counter}</h1>

        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }

  handleIncrement = () => {
    this.props.handleIncrement();
  }

  handleDecrement = () => {
    this.props.handleDecrement();
  }
}

export default App;

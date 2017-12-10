import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.value}</h1>

        <h2>Good morning <strong>{this.props.name}</strong>!</h2>

        <button onClick={this.handleIncrement_}>+</button>
        <button onClick={this.handleDecrement_}>-</button>

        <input type="text" defaultValue={this.props.name} onChange={this.handleUpdateName_}/>
      </div>
    );
  }

  handleIncrement_ = () => {
    this.props.handleIncrement();
  }

  handleDecrement_ = () => {
    this.props.handleDecrement();
  }

  handleUpdateName_ = (event) => {
    this.props.handleUpdateName(event.target.value);
  }
}

export default App;

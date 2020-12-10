import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from './react-webcam';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: null
    };
  }

  setResult = (value) => {
    debugger;
    this.setState({ result: value });
  }
  render() {
    return (
      <div className="App">
        <Webcam onScann={this.setResult} />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;

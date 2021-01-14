import React, { Component } from 'react';
import Webcam from './react-webcam';
import './App.css';

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

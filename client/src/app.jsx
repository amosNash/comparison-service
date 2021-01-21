import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.component {
  constructor () {
    super(props);
    this.state = {

    };
  }




  render () {
    return (
      <h1>HELLO!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Title } from '../style.js';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      item: null
    };
  }

  render () {
    return (
      <div>
        <Title>Comparison Service</Title>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('comparison'));
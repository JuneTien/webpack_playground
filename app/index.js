import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Webpack Playground, Hello React! :D</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
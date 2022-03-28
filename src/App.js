import React, { Component } from 'react';
import RouterApp from './routers/router';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {}
  render() {
    return (
      <RouterApp />
    );
  }
}

export default App;
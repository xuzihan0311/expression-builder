import React, { Component } from 'react';

import './App.css';
import ExpressionBuilder from './components/ExpressionBuilder.js'

class App extends Component {

  add(x,y) {
      return x + y;
  }

  subtract(x,y) {
      return x - y;
  }

  foo(x,y,z) {
      return x * y + z;
  }

  doSomethingComplicated(x) {
      return x^2;
  }

  render() {
      return (
          <ExpressionBuilder functions={[this.add, this.subtract, this.foo, this.doSomethingComplicated]} />
      );
  }
}

export default App

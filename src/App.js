// import React from 'react';
import React, { Component } from 'react';
import Header from './components/Header';
import Index from './pages/index';
class App extends Component {

  render() {
    return (
      <div>
        <head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </head>
        <Header />
        <Index />
      </div>
    );
  }
}

export default App;

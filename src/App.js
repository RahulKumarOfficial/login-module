import React, { Component } from 'react';
import Header from './PrimaryDisplay/Header';
import PrimaryComponent from './LoginModal/PrimaryComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <form id="InputTaking">
      <PrimaryComponent />
      </form>
       
      </div>
    );
  }
}

export default App;

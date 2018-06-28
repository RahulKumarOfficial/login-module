import React, { Component } from 'react';
import Header from './PrimaryDisplay/Header';
import './App.css';
import Footer from './PrimaryDisplay/Footer';

class App extends Component {
  render() {
    return (   
      <div className="App">
      <Header />    
        <div id="placeInBottom">
          <Footer />
        </div>  
      </div>
    );
  }
}
export default App;

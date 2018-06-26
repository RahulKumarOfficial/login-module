import React, { Component } from 'react';
import Header from './PrimaryDisplay/Header';
import PrimaryComponent from './LoginModal/PrimaryComponent';
import ButtonSubmit from './LoginModal/ButtonSubmit';
import Paper from '@material-ui/core/Paper';
import './App.css';


class App extends Component {
  render() {
   
    return (
      <div className="App">        
        <Paper id="paperForDisplay" square>
          <Header />
          <form id="InputTaking">
            <PrimaryComponent />
            <ButtonSubmit />
          </form>  
        </Paper>  
      </div>
    );
  }
}

export default App;

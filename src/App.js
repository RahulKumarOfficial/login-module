import React, { Component } from 'react';
import Header from './PrimaryDisplay/Header';
import PrimaryComponent from './LoginModal/PrimaryComponent';
import ButtonSubmit from './LoginModal/ButtonSubmit';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl } from '@material-ui/core';
import Footer from './PrimaryDisplay/Footer';

class App extends Component {
  render() {
   
    return (
      <div className="App">
      <Header />
      <div id="makeThisCenter">
        <Card id="paperForDisplay">
          <CardContent id="displayEverythingInside">
            <FormControl>
              <PrimaryComponent/>   
              <ButtonSubmit />    
            </FormControl>            
          </CardContent>
        </Card>
        </div>       
        <div id="placeInBottom">
          <Footer />
        </div>  
      </div>
    );
  }
}

export default App;

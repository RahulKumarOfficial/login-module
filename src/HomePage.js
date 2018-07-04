import React, { Component } from 'react';
import Header from './PrimaryDisplay/Header';
import './App.css';
import Footer from './PrimaryDisplay/Footer';
import ModalMaterial from './PrimaryDisplay/ModalMaterial';
//import {Router,Route} from 'react-router-dom';
class HomePage extends Component {
  render() {
    return (   
        <div className="HomePage">
        
                <Header />
                <ModalMaterial />    
                <div id="placeInBottom">
                    <Footer />
                </div> 
                 
        </div>
    );
  }
}
export default HomePage;

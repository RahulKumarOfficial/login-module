import React,{ Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Position.css';
import Modal from '@material-ui/core/Modal';
import InputTakerMod from './InputTaker';


class Header extends Component{
    state = {
        open :false
    };
    
    handleOpen = () => {
        this.setState({
            open : true
        });
    }

    handleClose = () => {
        this.setState({
            open : false
        });
    }


    render(){
        return( 
            <div>
                <AppBar position="fixed" color="default">
                    <Toolbar>
                        <img src={ require('/home/techdragon/Desktop/syrasoft-login-module/src/PrimaryDisplay/Syrasoft-Connect-logo.png') } id="logo2" alt="Syrasoft logo"/>                    
                        <Button  
                            id="btnPlace" 
                            variant="raised" 
                            color="primary" 
                            disableRipple
                            onClick = {this.handleOpen}
                        >
                            Sign In
                        </Button>                       
                        <Modal
                            open = {this.state.open}
                            onClose = {this.handleClose}
                            disableAutoFocus ={true}
                        >       
                            <div className="paper">
                                <br />
                                <InputTakerMod />
                            </div>                 
                        </Modal>                        
                    </Toolbar>
                </AppBar>
                
            </div>
            
        )
    }
}
export default Header;
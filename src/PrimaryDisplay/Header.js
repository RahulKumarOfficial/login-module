import React,{ Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
                        <Typography variant="title" color="inherit">
                            Syrasoft Logo
                        </Typography>
                        <Button  
                            id="btnPlace" 
                            variant="raised" 
                            color="primary" 
                            disableRipple
                            onClick = {this.handleOpen}
                        >
                            Sign Up
                        </Button>
                        <Modal
                        open = {this.state.open}
                        onClose = {this.handleClose}
                        disableAutoFocus ={true}
                        keepMounted = {true}
                        >       
                        <div className="paper">
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
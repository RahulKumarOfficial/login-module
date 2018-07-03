import React,{ Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Position.css';
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
        console.log("in parent",this.state.open)
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
                            onClick = {()=>{
                                this.setState({
                                    open:true
                                })
                            }}
                        >
                            Sign In
                        </Button>                                             
                    </Toolbar>
                </AppBar>
                 <InputTakerMod open={this.state.open} />                
            </div>            
        )
    }
}

export default Header;
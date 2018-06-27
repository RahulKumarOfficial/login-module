import React,{ Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Position.css';
import InputTakerMod from './InputTaker';


class Header extends Component{
    popModal(){
        <InputTakerMod />
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
                            onClick={this.popModal()}
                        >
                            Sign Up
                        </Button>
                    </Toolbar>
                </AppBar>
                
            </div>
            
        )
    }
}
export default Header;
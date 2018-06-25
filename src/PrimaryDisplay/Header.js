import React,{ Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css'
class Header extends Component{
    render(){
        return( 
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
                    >
                        Sign Up
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Header;
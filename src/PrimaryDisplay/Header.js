import React,{ Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Position.css';
import InputTakerMod from './InputTaker';

import TextField from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';
const styles = theme => ({
    emailRoot: {
        padding: 2,
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
      },  
    emailInput: {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: '2px solid black',
      fontSize: 16,
      padding: '10px 10px',
      width: 'calc(100% - 24px)',
    },
    emailFormLabel: {
      fontSize: 16,
    },
    formControl : {
      width:300,
    }      
});

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
        console.log("close btn  called");
        this.setState({
            open : false
        });
    }
    render(){
        const {classes} = this.props;
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
                 <InputTakerMod open={this.state.open} FooterProps={<Button                      
                    variant="raised" 
                    color="primary"     
                    disableRipple
                    onClick = {()=>{
                        this.setState({
                            open:true
                        })
                    }}
                >
                    Continue
                </Button>  } 
                HeaderProps = {   <Button  
                    variant="fab" 
                    color="default"  
                    id="cornerPlace"
                    mini
                    onClick = {this.handleClose.bind(this)}
                    
                    >
                      <img src={ require('/home/techdragon/Desktop/syrasoft-login-module/src/PrimaryDisplay/twotone-highlight_off-white-18/011.svg') }  alt="Close Icon"/>
            </Button>} 
            ContentProps = {
                <div id = "textFieldEmail">
                <TextField                    
                defaultValue=""
                label="Email*"
                
                id="textFieldEmail"
                placeholder = "Enter your email "
                
                InputProps={{
                    disableUnderline: true,
                    classes: {
                        root: classes.emailRoot,
                        input: classes.emailInput,
                    },
                }}
                InputLabelProps={{
                  shrink: true,
                }}            
    />
                </div>
             
            } 
           />                
            </div>            
        )
    }
}

const HeaderMod= withStyles(styles)(Header);
export default HeaderMod;
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Position.css'
const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
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

class InputTaker extends Component{
  state = {
      open: false,
    };
    handleOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

    showText = () => {
      console.log("Button is pressed");
    }

  render(){
    const { classes } = this.props;
    return(      
      //rendering text field for email rendering button 
      <form>
        <Button  variant="fab" color="default"  id="cornerPlace"  onClick={this.handleClose} mini>
          <img src={ require('/home/techdragon/Desktop/syrasoft-login-module/src/PrimaryDisplay/twotone-highlight_off-white-18/round-close-24px.svg') }  alt="Close Icon"/>
        </Button>
          <br />
        <img src={ require('/home/techdragon/Desktop/syrasoft-login-module/src/PrimaryDisplay/Syrasoft-Connect-logo.png') } id="logo" alt="Syrasoft logo"/>
          <br />
          <TextField                    
            defaultValue=""
            label="Email"
            required
            id="bootstrap-input"
            placeholder = "Enter your email "
            className = {classes.formControl}
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
          <br/><br />        
          <Button 
            variant="contained" 
            size="large" 
            color="primary" 
            onClick={this.showText}
            className = {classes.formControl}
          >
            Continue
          </Button> 
      </form>    
    )
  }
}
const InputTakerMod = withStyles(styles)(InputTaker);

export default InputTakerMod;
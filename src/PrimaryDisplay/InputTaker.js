import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';
function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
    const right = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      right: `${right}`,
      transform: `translate(-${top}%, -${left}%,-${right}%)`,
    };
  }
  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
    emailRoot: {
        padding: 0,
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
    constructor(props){
        super(props);
        
    }
    render(){
        const { classes } = this.props;
        return(
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >
            <div style={getModalStyle()} className={classes.paper}>
            <TextField                    
            defaultValue=""
            label="Email*"
            id="bootstrap-input"
            InputProps={{
                disableUnderline: true,
                classes: {
                    root: classes.emailRoot,
                    input: classes.emailInput,
                },
            }}
            
        />
            </div>
        </Modal>
        )
    }
}
const InputTakerMod = withStyles(styles)(InputTaker);

export default InputTakerMod;
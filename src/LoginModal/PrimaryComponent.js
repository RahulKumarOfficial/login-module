import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
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
    
    formControl: {
        margin: theme.spacing.unit,
    },

  });
  
class PrimaryComponent extends Component{

    render(){
        const { classes } = this.props;
        return(
            <FormControl className={classes.formControl} id="textFieldEmail">
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
            </FormControl>
            

        )
    }
}

const SimpleModalWrapped = withStyles(styles)(PrimaryComponent);
export default SimpleModalWrapped;
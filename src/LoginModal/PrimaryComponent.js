import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
   
    bootstrapRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },

    bootstrapInput: {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: '2px solid black',
      fontSize: 16,
      padding: '10px 10px',
      width: 'calc(100% - 24px)',
    },
    bootstrapFormLabel: {
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
                    label="Username*"
                    id="bootstrap-input"
                    InputProps={{
                        disableUnderline: true,
                        classes: {
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        },
                    }}
                />
            </FormControl>
            

        )
    }
}

const SimpleModalWrapped = withStyles(styles)(PrimaryComponent);
export default SimpleModalWrapped;
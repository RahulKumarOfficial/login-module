import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    
    formControl: {
        margin: theme.spacing.unit,
        
    },

  });
  
class ButtonSubmit extends Component{

    render(){
        const { classes } = this.props;
        return(
            <FormControl className={classes.formControl} id="textFieldEmail">
            <Button variant="contained" size="large" color="primary" className={classes.button}>
                Continue
            </Button>
            </FormControl>            
        )
    }
}

const submit = withStyles(styles)(ButtonSubmit);
export default submit;
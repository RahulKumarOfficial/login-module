import React, {Component} from 'react';
import Modal from '@material-ui/core';
import Fragment from 'react';
class ModalEmail extends Component{
    state = {
        open : false
    };
    
    handleOpen = () =>{
        this.setState({ open : true });
    }

    handleClose = () =>{
        this.setState({ open : false });
    }

    render(){

        const { classes } = this.props;

        return(
            <Fragment>
                <Modal > 
                </Modal>
            </Fragment>
        )
    }
}

export default ModalEmail;
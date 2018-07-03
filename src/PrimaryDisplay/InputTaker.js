import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Position.css';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types'
import {OverlayPanel} from 'primereact/components/overlaypanel/OverlayPanel';
const divStyleHeader ={
  position: 'relative',
  top:'0',
  maxHeight: '10',
  marginBottom:'30',
  paddingBottom:'20',

}
const divStyleFooter = {
  position:' relative',
  height: '20',
 maxHeight: '200',
  paddingTop:'30',
  marginBottom:' 30',
}
const divStyleBody = {
  position: 'relative',
  height: '80',
  paddingTop:'100',
  paddingBottom:'20',
  
}
const divStyleBodyWithHeaderOnly = {
  position: 'relative',
  height: '50',
  paddingTop:'0',
  
}
const divStyleBodyWithFooterOnly = {
  position: 'relative',
  height: '140',
  paddingTop:'90',
  paddingBottom:'40',
 
}
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
    
    formControl : {
      width:300,
    }     
  });

class InputTaker extends Component{
  state = {
    open : this.props.open,
    show : true,
    HeaderProps : this.props.HeaderProps,
    FooterProps : this.props.FooterProps
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      open:nextProps.open
    })
  }
    
  render(){
    console.log("Header is passed ? ",this.props.HeaderProps);
    console.log("Footer is passed ?", this.state.FooterProps );
    const { classes } = this.props;
    
    if(this.state.open){
      if(this.state.HeaderProps!==undefined && this.state.FooterProps!==undefined){ 
        return(      
          <div>
            <Modal open={this.state.open} onClose= {()=>{
                this.setState({
                  open:false
                })
              }}>        
              <div className = "body-modal">
                <div style={divStyleHeader}>
                  {this.state.HeaderProps}
                </div>
                <hr />
                <div style={divStyleBody}>
                  Content here
                </div>
                <hr />
                <div style={divStyleFooter}>
                  {this.state.FooterProps}
                </div>
              </div>              
            </Modal>            
          </div>          
        )        
      }     
      else if(this.state.FooterProps!==undefined){ 
        return(      
          <div>
            <Modal open={this.state.open} onClose= {()=>{
                this.setState({
                  open:false
                })
              }}>        
              <div className = "body-modal">
                <div style = {divStyleBodyWithFooterOnly}>
                  Content here
                </div>
                <hr />
                <div style={divStyleFooter}>
                  {this.state.FooterProps}
                </div>
              </div>              
            </Modal>            
          </div>          
        )        
      }
       else if(this.state.HeaderProps!==undefined){ 
        return(      
          <div>
            <Modal open={this.state.open} onClose= {()=>{
                this.setState({
                  open:false
                })
              }}>        
              <div className = "body-modal">
                <div style={divStyleBodyWithHeaderOnly}>
                  {this.state.HeaderProps}
                </div>
                <hr />
                <div style={divStyleFooter}>
                  Content here
                </div>
              </div>              
            </Modal>            
          </div>          
        )        
      }

      else if(this.state.HeaderProps===undefined && this.state.FooterProps===undefined){ 
        return(      
          <div>
            <Modal open={this.state.open} onClose= {()=>{
                this.setState({
                  open:false
                })
              }}>        
              <div className = "body-modal">                
                <div className = "content-modal">
                  Content here
                </div>                
              </div>              
            </Modal>            
          </div>          
        )        
      }
      
      }
        else
        return(      
          <div>
            hello           
                      
          </div>          
        )        
      
    }
  }

InputTaker.propTypes = {
  open : PropTypes.bool
}
InputTaker.defaultProps = {
  open:true
}
InputTaker.propTypes = {
  placeholder:PropTypes.string
}
InputTaker.defaultProps = {
  placeholder:"Enter your email"
}
InputTaker.defaultProps = {
  label:"Email"
}

const InputTakerMod = withStyles(styles)(InputTaker);

export default InputTakerMod;

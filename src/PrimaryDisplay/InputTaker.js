import React, { Component, Fragment } from 'react';
import { withStyles} from '@material-ui/core/styles';
import './Position.css';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
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
  paddingTop:'25',
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
  height: '150',
  paddingTop:'80',
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
    open :this.props.open,
    
    show : true,
    HeaderProps : this.props.HeaderProps,
    FooterProps : this.props.FooterProps,
    ContentProps : this.props.ContentProps
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      open:nextProps.open
    })
  }
    
  render(){
   
    console.log("in children",this.state.open);
    console.log("Header is passed ? ",this.props.HeaderProps, console.log(this.state.HeaderProps));
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
                  {this.state.ContentProps}
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
                {this.state.ContentProps}
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
                {this.state.ContentProps}
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
  open : PropTypes.bool,
  HeaderProps:PropTypes.object,
  FooterProps:PropTypes.object,
  ContentProps:PropTypes.object,
  show:PropTypes.bool,
}
InputTaker.defaultProps = {
  open:true,
  label:"Email",
  HeaderProps:undefined,
  FooterProps:undefined,
  ContentProps:undefined,
  show:true,
}


const InputTakerMod = withStyles(styles)(InputTaker);

export default InputTakerMod;

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import './styleFullWidth.css';
const styles = {
  root: {
    width: 1000.
    
  },
};



class Footer extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const one = this.props.one;
    console.log(one)
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        id="fullwidth"
      >                           
        <BottomNavigationAction label="Favorites"  />
        <BottomNavigationAction label="FAQ"  />
        <BottomNavigationAction label="Contact Us"  />
        <BottomNavigationAction label="Support"  />
      </BottomNavigation>
    );
  }
}
const Recents = () => <h1>Hello Recents</h1>
  
export default withStyles(styles)(Footer);

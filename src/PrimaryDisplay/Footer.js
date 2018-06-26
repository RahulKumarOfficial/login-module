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
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
       
        id="fullwidth"
      >
        <BottomNavigationAction label="Recents"/>
        <BottomNavigationAction label="Favorites"  />
        <BottomNavigationAction label="FAQ"  />
        <BottomNavigationAction label="Contact Us"  />
        <BottomNavigationAction label="Support"  />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(Footer);

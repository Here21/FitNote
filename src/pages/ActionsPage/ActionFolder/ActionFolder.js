import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './styles';
import { PartService } from '../../../service';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class ActionFolder extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    PartService.get().then(res => {
      console.log(res);
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </div>
    );
  }
}

ActionFolder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActionFolder);

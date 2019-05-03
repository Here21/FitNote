import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

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
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              胸部计划
            </Typography>
            <Typography component="p">
              well meaning and kindly.
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

ActionFolder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActionFolder);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

class ActionsPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper elevation={1} className={classes.content}>
          <div>
            <Typography variant="h6" gutterBottom>
              杠铃肩部推举
            </Typography>
            <Typography variant="caption" gutterBottom>
              肩部
            </Typography>
          </div>
          <Button size="small" className={classes.margin}>
            Small
          </Button>
        </Paper>
      </div>
    );
  }
}

ActionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionsPage);

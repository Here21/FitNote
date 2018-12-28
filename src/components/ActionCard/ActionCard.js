import React, { Component } from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ActionCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={1} className={classes.container}>
        <div>
          <Typography variant="h6" gutterBottom>
            杠铃肩部推举
          </Typography>
          <Typography variant="caption" gutterBottom>
            肩部
          </Typography>
        </div>
        <Button size="small">加入训练</Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(ActionCard);

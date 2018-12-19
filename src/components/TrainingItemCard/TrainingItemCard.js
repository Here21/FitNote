import React, { Component } from 'react';
import { Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class TrainingItemCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.container}>
        <Typography variant="h6" gutterBottom>
          平板卧推
        </Typography>
      </Card>
    );
  }
}

export default withStyles(styles)(TrainingItemCard);

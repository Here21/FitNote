import React, { Component } from 'react';
import { Card, Typography, IconButton } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class TrainingItemCard extends Component {
  render() {
    const { classes } = this.props;
    const data = [
      { index: 0, weight: 15, count: 15 },
      { index: 1, weight: 17.5, count: 12 },
      { index: 2, weight: 20, count: 10 },
      { index: 3, weight: 22.5, count: 8 }
    ];
    return (
      <Card className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h6" gutterBottom>
            平板卧推
          </Typography>
          <IconButton className={classes.iconButton} aria-label="add">
            <Add />
          </IconButton>
        </div>
        <div className={classes.table}>
          <div className={classNames(classes.col, classes.tableHeader)}>
            <span>重量(KG)</span>
            <span>次数(RM)</span>
          </div>
          {data.map(item => (
            <div key={item.index} className={classes.col}>
              <span>{item.weight}</span>
              <span>{item.count}</span>
            </div>
          ))}
        </div>
        <div className={classes.processLine} style={{ width: '20%' }} />
      </Card>
    );
  }
}

export default withStyles(styles)(TrainingItemCard);

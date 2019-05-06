import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Notify from '../../../utils/Notify';
import ActionTable from '../../../components/ActionTable';

class PlanDetail extends Component {
  state = {
    data: [],
    open: false
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper className={classes.paperRoot} elevation={1}>
          <Typography variant="h5" component="h3">
            训练计划名称
          </Typography>
          <Typography component="p">
            There is description of training plan.
          </Typography>
        </Paper>
        <ActionTable />
      </div>
    );
  }
}

PlanDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlanDetail);

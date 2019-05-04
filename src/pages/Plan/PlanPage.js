import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';
import { ActionService, TrainingService } from '../../service';
import Notify from '../../utils/Notify';

class PlanPage extends Component {
  state = {
    data: [],
    open: false
  };

  handleAdd = () => {
    let { history } = this.props;
    history.push('/actions/add');
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    ActionService.get().then(res => {
      this.setState({
        data: res.data
      });
    });
  };

  handleAddToTraining = value => {
    this.setState({
      open: true,
      actionId: value
    });
  };

  handleRemove = id => {
    ActionService.remove(id).then(res => {
      Notify.success(res.message);
      this.fetchData();
    });
  };

  handleConfirmGoal = value => {
    TrainingService.add({
      action_id: this.state.actionId,
      goal: value
    }).then(res => {
      this.handleClose();
      Notify.success(res.message);
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;
    const { data, open } = this.state;
    return (
      <div className={classes.container}>
        <Fab
          color="secondary"
          aria-label="Add"
          className={classes.fab}
          onClick={this.handleAdd}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

PlanPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlanPage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';
import ActionService from '../../service/ActionService';
import TrainingService from '../../service/TrainingService';
import ActionCard from '../../components/ActionCard';

class ActionsPage extends Component {
  state = {
    data: []
  };
  handleAdd = () => {
    let { history } = this.props;
    history.push('/actions/add');
  };

  componentDidMount() {
    ActionService.get().then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  handleAddToTraining = value => {
    TrainingService.add({ action_id: value });
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className={classes.container}>
        {data.map(item => (
          <ActionCard
            key={item.id}
            data={item}
            add={this.handleAddToTraining}
          />
        ))}
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

ActionsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActionsPage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';
import ActionService from '../../service/ActionService';
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

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className={classes.container}>
        {data.map(item => (
          <ActionCard key={item.id} data={item} />
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

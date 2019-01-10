import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import TrainingService from '../../service/TrainingService';
import ExpansionBoard from '../../components/ExpansionBoard';
import CalendarBoard from '../../components/CalendarBoard';
import styles from './styles';

class HomePage extends Component {
  state = {
    history: null
  };
  componentDidMount() {
    TrainingService.getHistory().then(res => {
      const history = _.orderBy(Object.entries(res.data), a => a[0], 'desc');
      this.setState({
        history
      });
    });
  }

  render() {
    const { classes } = this.props;
    const { history } = this.state;
    return (
      <div className={classes.container}>
        <CalendarBoard data={history} />
        {history && <ExpansionBoard data={history} />}
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);

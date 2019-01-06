import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  render() {
    const { classes, goal, extra } = this.props;

    return (
      <div className={classes.progressBar}>
        <div
          className={classNames(classes.processLine, classes.goalLine)}
          style={{ width: goal + '%' }}
        />
        <div
          className={classNames(classes.processLine, classes.extraLine)}
          style={{ width: extra + '%' }}
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
  goal: PropTypes.number,
  extra: PropTypes.number
};

export default withStyles(styles)(ProgressBar);

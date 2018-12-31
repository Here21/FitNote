import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';
import { PART } from '../../constant/const';

class ActionCard extends Component {
  state = {
    INNER_WIDTH: window.innerWidth
  };
  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }
  onWindowResize = event => {
    this.setState({
      INNER_WIDTH: event.target.innerWidth
    });
  };
  render() {
    const { classes, data } = this.props;
    const { INNER_WIDTH } = this.state;

    return (
      <Paper
        elevation={1}
        className={classNames(
          classes.container,
          INNER_WIDTH < 450 ? classes.cleanMargin : ''
        )}
      >
        <div>
          <Typography variant="h6" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {PART[data.part] || '---'}
          </Typography>
        </div>
        <Button size="small">加入训练</Button>
      </Paper>
    );
  }
}

ActionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default withStyles(styles)(ActionCard);

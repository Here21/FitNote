import React, { Component } from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';

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
    const { classes } = this.props;
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

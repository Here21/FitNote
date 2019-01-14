import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';
import DropDownMenu from '../DropDownMenu';
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
  handleRemove = () => {
    this.props.remove(this.props.data.id);
  };
  render() {
    const { classes, data, add } = this.props;
    const { INNER_WIDTH } = this.state;

    return (
      <Paper
        elevation={1}
        className={classNames(
          classes.container,
          INNER_WIDTH < 450 ? classes.cleanMargin : ''
        )}
      >
        <div className={classes.contentWrap}>
          <Typography variant="h6" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {PART[data.part] || '---'}
          </Typography>
        </div>
        <div className={classNames(classes.contentWrap, classes.actions)}>
          <DropDownMenu remove={this.handleRemove} />
          <Button size="small" color="primary" onClick={() => add(data.id)}>
            加入训练
          </Button>
        </div>
      </Paper>
    );
  }
}

ActionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
  add: PropTypes.func,
  remove: PropTypes.func
};

export default withStyles(styles)(ActionCard);

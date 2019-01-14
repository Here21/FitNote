import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';
import { PART } from '../../constant/const';

class ActionCard extends Component {
  state = {
    INNER_WIDTH: window.innerWidth,
    anchorEl: null
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
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleRemove = id => () => {
    this.handleClose();
    this.props.remove(id);
  };
  render() {
    const { classes, data, add } = this.props;
    const { INNER_WIDTH, anchorEl } = this.state;

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
          <IconButton
            aria-owns={anchorEl ? 'dropdown-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="dropdown-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleRemove(data.id)}>删除</MenuItem>
          </Menu>
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

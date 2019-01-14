import React, { PureComponent } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';

class DropDownMenu extends PureComponent {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleRemove = () => {
    this.handleClose();
    this.props.remove();
  };
  render() {
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
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
          <MenuItem onClick={this.handleRemove}>删除</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

DropDownMenu.propTypes = {
  remove: PropTypes.func
};

export default DropDownMenu;

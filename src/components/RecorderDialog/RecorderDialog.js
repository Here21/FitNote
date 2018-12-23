import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class RecorderDialog extends Component {
  state = {
    weight: 0,
    rate: 0
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value && parseInt(event.target.value)
    });
  };

  render() {
    const { classes, onClose, ...other } = this.props;
    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="form-dialog-title">动作名称</DialogTitle>
        <DialogContent>
          <DialogContentText>
            输入相对应的数据，提交后生成单次记录
          </DialogContentText>
          <TextField
            autoFocus
            autoComplete="off"
            margin="dense"
            id="name"
            label="重量(KG)："
            type="number"
            min="0"
            max="300"
            fullWidth
            value={this.state.weight}
            onChange={this.handleChange('weight')}
          />
          <TextField
            margin="dense"
            autoComplete="off"
            id="name"
            label="次数(RM)："
            type="number"
            min="0"
            max="2000"
            fullWidth
            value={this.state.rate}
            onChange={this.handleChange('rate')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>取消</Button>
          <Button onClick={this.handleSubmit} color="primary">
            提交
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

RecorderDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

export default withStyles(styles)(RecorderDialog);

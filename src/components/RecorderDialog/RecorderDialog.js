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
import { RegEx } from '../../constant/const';
import styles from './styles';

class RecorderDialog extends Component {
  state = {
    weight: 0,
    weightValid: true,
    set: 1,
    setValid: true
  };

  initState = () => {
    this.setState({
      weight: 0,
      weightValid: true,
      set: 1,
      setValid: true
    });
  };

  handleClose = () => {
    this.props.onClose();
    this.initState();
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
    this.initState();
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleKeyup = name => event => {
    this.setState({
      [name + 'Valid']: true
    });
  };

  handleCheckInput = name => event => {
    const reg = name === 'weight' ? RegEx.WEIGHT : RegEx.SET;
    if (!reg.test(event.target.value)) {
      this.setState({
        [name + 'Valid']: false
      });
    }
  };

  render() {
    const { ...other } = this.props;
    const { weight, weightValid, set, setValid } = this.state;
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
            label="重量(KG)："
            type="number"
            step="0.5"
            min="0"
            max="300"
            fullWidth
            error={!weightValid}
            helperText={
              !weightValid ? '输入格式为非负数，且最多只有小数点后两位' : ''
            }
            value={weight}
            onKeyUp={this.handleKeyup('weight')}
            onChange={this.handleChange('weight')}
            onBlur={this.handleCheckInput('weight')}
          />
          <TextField
            margin="dense"
            autoComplete="off"
            label="次数(RM)："
            type="number"
            min="0"
            max="2000"
            fullWidth
            value={set}
            error={!setValid}
            helperText={!setValid ? '输入格式为非零正整数' : ''}
            onKeyUp={this.handleKeyup('set')}
            onChange={this.handleChange('set')}
            onBlur={this.handleCheckInput('set')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>取消</Button>
          <Button
            onClick={this.handleSubmit}
            color="primary"
            disabled={!(weightValid && setValid)}
          >
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

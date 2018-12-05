import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Paper
} from '@material-ui/core';
import styles from './styles';

class ActionEditor extends Component {
  state = {
    name: '',
    desc: ''
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper elevation={1} className={classes.content}>
          <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              label="动作名称"
              placeholder="请输入动作名称"
              fullWidth
              required
              name={'name'}
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <TextField
              label="动作描述"
              multiline
              fullWidth
              rowsMax="4"
              margin="normal"
              name={'desc'}
              value={this.state.desc}
              onChange={this.handleInputChange}
            />
            <div>
              <Button variant="contained" className={classes.button}>
                取消
              </Button>
              <Button variant="contained" color="primary" type={'submit'} className={classes.button}>
                提交
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

ActionEditor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionEditor);

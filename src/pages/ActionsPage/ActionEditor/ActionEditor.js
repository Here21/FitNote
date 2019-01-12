import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem
  // FormControlLabel,
  // FormLabel,
  // RadioGroup,
  // Radio
} from '@material-ui/core';
import styles from './styles';
import ActionService from '../../../service/ActionService';

class ActionEditor extends Component {
  state = {
    name: '',
    desc: '',
    part: 1,
    record: '1'
  };
  initState = () => {
    this.setState({
      name: '',
      desc: '',
      part: 1,
      record: '1'
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    ActionService.add(this.state).then(res => {
      this.props.history.goBack();
      this.initState();
    });
  };
  handleCancel = () => {
    this.props.history.goBack();
    this.initState();
  };
  handleChange = event => {
    const target = event.target;
    const value = target.value;
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
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              label="动作名称"
              placeholder="请输入动作名称"
              fullWidth
              required
              name={'name'}
              value={this.state.name}
              onChange={this.handleChange}
            />
            <TextField
              label="动作描述"
              multiline
              fullWidth
              rowsMax="4"
              margin="normal"
              name={'desc'}
              value={this.state.desc}
              onChange={this.handleChange}
            />
            <FormControl margin="normal" className={classes.select}>
              <InputLabel htmlFor="part">部位</InputLabel>
              <Select
                value={this.state.part}
                onChange={this.handleChange}
                inputProps={{ name: 'part' }}
              >
                <MenuItem value={0}>
                  <em>无</em>
                </MenuItem>
                <MenuItem value={1}>胸部</MenuItem>
                <MenuItem value={2}>肩部</MenuItem>
                <MenuItem value={3}>背部</MenuItem>
                <MenuItem value={4}>腿部</MenuItem>
                <MenuItem value={5}>手臂</MenuItem>
                <MenuItem value={6}>核心</MenuItem>
              </Select>
            </FormControl>
            {/*<FormControl*/}
            {/*component="fieldset"*/}
            {/*className={classes.formControl}*/}
            {/*fullWidth*/}
            {/*>*/}
            {/*<FormLabel component="legend">记录</FormLabel>*/}
            {/*<RadioGroup*/}
            {/*aria-label="record"*/}
            {/*name="record"*/}
            {/*className={classes.group}*/}
            {/*value={this.state.record}*/}
            {/*onChange={this.handleChange}*/}
            {/*>*/}
            {/*<FormControlLabel*/}
            {/*value="1"*/}
            {/*control={<Radio />}*/}
            {/*label="重量&组数"*/}
            {/*/>*/}
            {/*<FormControlLabel value="2" control={<Radio />} label="时间" />*/}
            {/*</RadioGroup>*/}
            {/*</FormControl>*/}
            <div className={classes.buttonGroup}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={this.handleCancel}
              >
                取消
              </Button>
              <Button
                variant="contained"
                color="primary"
                type={'submit'}
                className={classes.button}
              >
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActionEditor);

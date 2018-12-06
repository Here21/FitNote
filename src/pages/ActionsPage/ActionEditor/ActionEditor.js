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
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import _ from 'lodash';
import styles from './styles';

class ActionEditor extends Component {
  state = {
    name: '',
    desc: '',
    type: 1,
    record: []
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleSelectChange = (event) => {
    const target = event.target;
    const value = target.value;
    const set = new Set(this.state.record);

    set.has(value) ? set.delete(value) : set.add(value);
    this.setState({
      record: [...set]
    })
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
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="type">部位</InputLabel>
              <Select
                value={this.state.type}
                onChange={this.handleInputChange}
                inputProps={{ name: 'type' }}
              >
                <MenuItem value={0}>
                  <em>无</em>
                </MenuItem>
                <MenuItem value={1}>胸部</MenuItem>
                <MenuItem value={2}>肩部</MenuItem>
                <MenuItem value={3}>背部</MenuItem>
              </Select>
            </FormControl>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={_.includes(this.state.record, "1")}
                    onChange={this.handleSelectChange}
                    inputProps={{ name: 'record' }}
                    value="1"
                  />
                }
                label="时间"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={_.includes(this.state.record, "2")}
                    onChange={this.handleSelectChange}
                    inputProps={{ name: 'record' }}
                    value="2"
                  />
                }
                label="次数"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={_.includes(this.state.record, "2")}
                    onChange={this.handleSelectChange}
                    inputProps={{ name: 'record' }}
                    value="3"
                  />
                }
                label="重量"
              />
            </FormGroup>
            <div className={classes.buttonGroup}>
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

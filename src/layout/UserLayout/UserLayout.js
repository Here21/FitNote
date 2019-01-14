import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import withRoot from '../../withRoot';
import styles from './styles';
import UserService from '../../service/UserService';
import Notify from '../../utils/Notify';
import logo from '../../assets/fitnote_icon.png';

class UserLayout extends React.Component {
  state = {
    account: '',
    password: ''
  };
  handleSubmit = e => {
    const { history } = this.props;
    e.preventDefault();
    UserService.login(this.state)
      .then(data => {
        history.replace('/home');
      })
      .catch(e => {
        Notify.message('请重新登录');
      });
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
        <div className={classes.header}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant="h4" gutterBottom className={classes.title}>
            FitNote
          </Typography>
        </div>
        <Paper elevation={1} className={classes.content}>
          <form noValidate onSubmit={this.handleSubmit} autoComplete="off">
            <TextField
              label="账户"
              placeholder="请输入登录账户"
              autoComplete="off"
              fullWidth
              required
              name={'account'}
              value={this.state.account}
              onChange={this.handleChange}
            />
            <TextField
              label="密码"
              placeholder="请输入密码"
              autoComplete="new-password"
              fullWidth
              required
              margin={'normal'}
              type="password"
              name={'password'}
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div className={classes.buttonGroup}>
              <Button variant="contained" className={classes.button}>
                取消
              </Button>
              <Button
                variant="contained"
                color="primary"
                type={'submit'}
                className={classes.button}
              >
                登录
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

UserLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withRoot(
  withStyles(styles, { withTheme: true })(withRouter(UserLayout))
);

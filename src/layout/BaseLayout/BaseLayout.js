import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import InsertChart from '@material-ui/icons/InsertChart';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from './styles';
import { Redirect, Route, Switch } from 'react-router-dom';
import ActionsPage from '../../pages/ActionsPage';
import HomePage from '../../pages/HomePage';
import TrainingPage from '../../pages/TrainingPage';
import ActionEditor from '../../pages/ActionsPage/ActionEditor';
import { checkCookie, deleteCookie } from '../../utils/cookie';

class BaseLayout extends React.Component {
  state = {
    open: false,
    auth: true,
    anchorEl: null
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleNavigate = path => {
    let { history } = this.props;
    history.push(path);
    this.handleDrawerClose();
  };

  handleAccountLogout = () => {
    deleteCookie('token');
    this.setState({
      auth: false
    });
  };

  handleAccountMenu = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  componentDidMount() {
    if (checkCookie('token')) {
      this.setState({
        auth: true
      });
    }
  }

  render() {
    const { classes, theme } = this.props;
    const { open, auth, anchorEl } = this.state;
    if (!checkCookie('token')) {
      return <Redirect to="/login" />;
    }
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.appTitle}
            >
              Fit Note
            </Typography>
            {auth ? (
              <div>
                <IconButton
                  aria-owns={!!anchorEl ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleAccountMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={!!anchorEl}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleAccountLogout}>
                    退出登录
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Button color="inherit">Login</Button>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          anchor="left"
          open={open}
          onClose={this.handleDrawerClose}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => this.handleNavigate('/home')}>
              <ListItemIcon>
                <InsertChart />
              </ListItemIcon>
              <ListItemText primary={'训练历程'} />
            </ListItem>
            <ListItem button onClick={() => this.handleNavigate('/actions')}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'动作库'} />
            </ListItem>
            <ListItem button onClick={() => this.handleNavigate('/training')}>
              <ListItemIcon>
                <FitnessCenter />
              </ListItemIcon>
              <ListItemText primary={'训练'} />
            </ListItem>
          </List>
        </Drawer>
        <div className={classes.content}>
          <Switch>
            <Route path="/home" exact component={HomePage} />
            <Route path="/actions" exact component={ActionsPage} />
            <Route path="/actions/add" exact component={ActionEditor} />
            <Route path="/actions/:id" exact component={ActionsPage} />
            <Route path="/training" component={TrainingPage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </div>
    );
  }
}

BaseLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(BaseLayout);

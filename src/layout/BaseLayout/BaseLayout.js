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
  ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import withRoot from '../../withRoot';
import styles from './styles';
import { Redirect, Route, Switch } from 'react-router-dom';
import ActionsPage from '../../pages/ActionsPage';
import HomePage from '../../pages/HomePage';
import TrainingPage from '../../pages/TrainingPage';
import ActionEditor from '../../pages/ActionsPage/ActionEditor';

class BaseLayout extends React.Component {
  state = {
    open: false
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

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

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
            <Typography variant="h6" color="inherit" noWrap>
              Fit Note
            </Typography>
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
            <ListItem button onTouchEnd={() => this.handleNavigate('/home')}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'训练历程'} />
            </ListItem>
            <ListItem button onTouchEnd={() => this.handleNavigate('/actions')}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'动作库'} />
            </ListItem>
            <ListItem
              button
              onTouchEnd={() => this.handleNavigate('/training')}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'训练'} />
            </ListItem>
          </List>
        </Drawer>
        <div className={classes.content}>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/actions" exact component={ActionsPage} />
            <Route path="/actions/add" component={ActionEditor} />
            <Route path="/actions/:id" component={ActionsPage} />
            <Route path="/training" component={TrainingPage} />
            <Redirect to="/home" />
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

export default withRoot(withStyles(styles, { withTheme: true })(BaseLayout));

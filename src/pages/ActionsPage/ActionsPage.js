import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';

class ActionsPage extends Component {
  handleAdd = () => {
    let { history } = this.props;
    history.push('/actions/add');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper elevation={1} className={classes.content}>
          <div>
            <Typography variant="h6" gutterBottom>
              杠铃肩部推举
            </Typography>
            <Typography variant="caption" gutterBottom>
              肩部
            </Typography>
          </div>
          <Button size="small" className={classes.margin}>
            加入训练
          </Button>
        </Paper>
        <Fab
          color="secondary"
          aria-label="Add"
          className={classes.fab}
          onClick={this.handleAdd}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

ActionsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActionsPage);

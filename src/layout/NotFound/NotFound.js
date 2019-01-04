import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { withRouter } from 'react-router-dom';
import withRoot from '../../withRoot';
import styles from './styles';

class NotFound extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Fade in timeout={2000}>
          <Paper elevation={4} className={classes.paper}>
            404 Not Found
          </Paper>
        </Fade>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withRoot(
  withStyles(styles, { withTheme: true })(withRouter(NotFound))
);

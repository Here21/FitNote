import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Typography,
  Button,
  CardContent,
  CardHeader,
  CardActions
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';
import DropDownMenu from '../DropDownMenu';

class PlanFolderCard extends Component {
  onWindowResize = event => {
    this.setState({
      INNER_WIDTH: event.target.innerWidth
    });
  };
  handleRemove = () => {
    this.props.remove(this.props.data.id);
  };
  handleEdit = () => {
    //
  };
  render() {
    const { classes, data, add } = this.props;

    return (
      <Card className={classNames(classes.container)}>
        <CardHeader
          className={classNames(classes.headerRoot)}
          action={
            <DropDownMenu edit={this.handleEdit} remove={this.handleRemove} />
          }
          title={
            <Typography variant="h6" gutterBottom>
              Name
            </Typography>
          }
        />
        <CardContent className={classes.contentRoot}>
          <Typography variant="caption" gutterBottom>
            Desc
          </Typography>
        </CardContent>
        <CardActions className={classes.actionsRoot} disableActionSpacing>
          <Button size="small" onClick={() => add(data.id)}>
            加入训练
          </Button>
        </CardActions>
      </Card>
    );
  }
}

PlanFolderCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
  add: PropTypes.func,
  remove: PropTypes.func
};

export default withStyles(styles)(PlanFolderCard);

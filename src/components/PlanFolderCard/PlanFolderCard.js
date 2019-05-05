import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Button, CardContent, CardHeader } from '@material-ui/core';
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
  }
  render() {
    const { classes, data, add } = this.props;

    return (
      <Card className={classNames(classes.container)}>
        <CardHeader
          action={<DropDownMenu edit={this.handleEdit} remove={this.handleRemove} />}
          title={
            <Typography variant="h6" gutterBottom>
              Name
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="caption" gutterBottom>
            Desc
          </Typography>
        </CardContent>
        <div className={classNames(classes.contentWrap, classes.actions)}>
          <Button size="small" color="primary" onClick={() => add(data.id)}>
            加入训练
          </Button>
        </div>
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

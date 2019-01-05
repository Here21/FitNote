import React, { Component } from 'react';
import { Card, Typography, IconButton } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import RecorderDialog from '../RecorderDialog';
import PropTypes from 'prop-types';
import RecorderService from '../../service/RecorderService';

class TrainingItemCard extends Component {
  state = {
    open: false,
    recordData: [],
    progress: 0
  };
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  handleSubmit = value => {
    const { data } = this.props;
    RecorderService.add({
      training_id: data.id,
      ...value
    }).then(res => {
      this.handleClose();
      this.fetchData(data.id);
    });
  };
  componentDidMount() {
    const { data } = this.props;
    this.fetchData(data.id);
  }

  fetchData = id => {
    RecorderService.getTrainingRecord(id).then(res => {
      this.setState({
        recordData: res.data
      });
    });
  };

  render() {
    const { classes, data } = this.props;
    const { recordData } = this.state;
    return (
      <Card className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h6" gutterBottom>
            {data.name || '---'}
          </Typography>
          <IconButton
            className={classes.iconButton}
            aria-label="add"
            onClick={this.handleClickOpen}
          >
            <Add />
          </IconButton>
        </div>
        <div className={classes.table}>
          <div className={classNames(classes.col, classes.tableHeader)}>
            <span>重量(KG)</span>
            <span>次数(RM)</span>
          </div>
          <div className={classes.recordItemWrap}>
            {recordData.map(item => (
              <div
                key={item.id}
                className={classNames(classes.col, classes.recordItem)}
              >
                <span>{item.weight}</span>
                <span>{item.set}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.processLine} style={{ width: '20%' }} />
        <RecorderDialog
          open={this.state.open}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
        />
      </Card>
    );
  }
}

TrainingItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default withStyles(styles)(TrainingItemCard);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { withStyles } from '@material-ui/core/styles';
import TrainingItemCard from '../../components/TrainingItemCard';
import styles from './styles';
import TrainingService from '../../service/TrainingService';

class TrainingPage extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    TrainingService.get().then(res => {
      this.setState({
        data: res.data
      });
    });
  }
  render() {
    const { classes } = this.props;
    const { data } = this.state;
    if (data.length === 0) {
      return (
        <div className={classes.message}>
          您还没有添加今天的运动计划，去动作库中添加吧
        </div>
      );
    }
    return (
      <div className={classes.container}>
        {data.map(item => (
          <TrainingItemCard key={item.id} data={item} />
        ))}
        <Button variant="contained" color="primary" className={classes.button}>
          训练完成
          <DoneAllIcon className={classes.rightIcon} />
        </Button>
      </div>
    );
  }
}

TrainingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TrainingPage);

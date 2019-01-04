import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styles from './styles';

class SetGoalDialog extends React.Component {
  state = {
    goal: 3
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // 在关闭modal的时候，重置state goal默认值
    if (!nextProps.open) {
      return {
        goal: 3
      };
    }
    return null;
  }

  handleClose = () => {
    this.props.close();
  };

  handleGoalChange = event => {
    this.setState({ goal: event.target.value });
  };

  handleConfirm = () => {
    this.props.confirm(this.state.goal);
  };

  render() {
    const { classes, open } = this.props;

    return (
      <React.Fragment>
        <Dialog
          fullWidth
          maxWidth="md"
          open={open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">设定计划组数</DialogTitle>
          <DialogContent>
            <DialogContentText>
              你可以选择设定一个计划组数，这将是该动作您需要完成的组数（当然额外完成和未完成都会被记录）
            </DialogContentText>
            <form className={classes.form} noValidate>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="goal">计划组数</InputLabel>
                <Select
                  value={this.state.goal}
                  onChange={this.handleGoalChange}
                  inputProps={{
                    name: '3 组',
                    id: 'goal'
                  }}
                >
                  <MenuItem value={1}>1 组</MenuItem>
                  <MenuItem value={2}>2 组</MenuItem>
                  <MenuItem value={3}>3 组</MenuItem>
                  <MenuItem value={4}>4 组</MenuItem>
                  <MenuItem value={5}>5 组</MenuItem>
                  <MenuItem value={6}>6 组</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              取消
            </Button>
            <Button onClick={this.handleConfirm} color="primary">
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

SetGoalDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired
};

export default withStyles(styles)(SetGoalDialog);

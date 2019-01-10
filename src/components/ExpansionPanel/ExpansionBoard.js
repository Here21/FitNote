import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TrainingItemCard from '../../components/TrainingItemCard';
import styles from './styles';

class ExpansionBoard extends PureComponent {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  render() {
    const { classes, data } = this.props;
    const { expanded } = this.state;
    return (
      <div className={classes.container}>
        {Object.entries(data).map(item => {
          return (
            <ExpansionPanel
              key={item[0]}
              expanded={expanded === item[0]}
              onChange={this.handleChange(item[0])}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  训练日：
                  {item[0]}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className={classes.content}>
                  {item[1].map(list => (
                    <TrainingItemCard key={list.id} data={list} exhibition />
                  ))}
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

ExpansionBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default withStyles(styles)(ExpansionBoard);

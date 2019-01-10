import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CalendarHeatmap from 'react-calendar-heatmap';
import './custom-calendar.css';

import styles from './styles';

class CalendarBoard extends PureComponent {
  componentDidMount() {
    this.calendarWrap.current.scrollTo(800, 0);
    console.log(this.calendarWrap);
  }

  calendarWrap = React.createRef();

  render() {
    const { classes } = this.props;
    return (
      <div
        id="calendar-board"
        ref={this.calendarWrap}
        className={classes.container}
      >
        <div className={classes.calendarWrap}>
          <CalendarHeatmap
            startDate={new Date(new Date() - 31536000000)
              .toISOString()
              .slice(0, 10)}
            endDate={new Date().toISOString().slice(0, 10)}
            showWeekdayLabels
            weekdayLabels={[
              '周日',
              '周一',
              '周二',
              '周三',
              '周四',
              '周五',
              '周六'
            ]}
            monthLabels={[
              '一月',
              '二月',
              '三月',
              '四月',
              '五月',
              '六月',
              '七月',
              '八月',
              '九月',
              '十月',
              '十一月',
              '十二月'
            ]}
            values={[
              { date: '2018-01-01', count: 2 },
              { date: '2018-01-22', count: 1 },
              { date: '2018-01-30', count: 0 },
              { date: '2018-01-31', count: 0 },
              { date: '2018-12-01', count: 1 },
              { date: '2018-12-31', count: 4 }
            ]}
            classForValue={value => {
              if (!value) {
                return 'color-empty';
              }
              return `color-github-${value.count}`;
            }}
            onClick={value => {
              if (value) {
                alert(`Clicked on value with count: ${value.count}`);
              }
            }}
          />
        </div>
      </div>
    );
  }
}

CalendarBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default withStyles(styles)(CalendarBoard);

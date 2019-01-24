import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CalendarHeatmap from 'react-calendar-heatmap';
import { MONTH, WEEKDAY, DAYLONG } from '../../constant/const';
import './custom-calendar.css';

import styles from './styles';

class CalendarBoard extends PureComponent {
  componentDidMount() {
    this.calendarWrap.current.scrollTo(800, 0);
  }

  calendarWrap = React.createRef();

  renderCalendarCell = value => {
    if (!value) {
      return 'color-empty';
    }
    return `color-fitnote-${value.count <= 4 ? value.count : 4}`;
  };

  render() {
    const { classes, data } = this.props;
    const values = data
      ? data.map(item => {
          return { date: item[0], count: item[1].length };
        })
      : [];
    const now = new Date().toISOString().slice(0, 10);
    const yesteryear = new Date(new Date(now) - DAYLONG * 365)
      .toISOString()
      .slice(0, 10);
    return (
      <div
        id="calendar-board"
        ref={this.calendarWrap}
        className={classes.container}
      >
        <div className={classes.calendarWrap}>
          <CalendarHeatmap
            startDate={yesteryear}
            endDate={now}
            showWeekdayLabels
            weekdayLabels={WEEKDAY}
            monthLabels={MONTH}
            values={values}
            classForValue={this.renderCalendarCell}
            onClick={value => {
              if (value) {
                alert(`训练项目数量: ${value.count}`);
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
  data: PropTypes.array
};

CalendarBoard.defaultProps = {
  data: []
};

export default withStyles(styles)(CalendarBoard);

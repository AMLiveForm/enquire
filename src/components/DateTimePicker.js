import React, { Component } from 'react';
import DateTimeField from '@1stquad/react-bootstrap-datetimepicker';
import moment from 'moment';

class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      format: 'Do MMMM YYYY',
      inputFormat: 'Do MMMM YYYY',
      mode: 'date',
      startOfWeek: 'week',
    //   availableDates: [new Date(Date.parse('2017-03-16T00:00:00Z')), new Date(Date.parse('2022-06-23T00:00:00Z'))]
    };
  }

  handleChange = newDate => {
    return this.setState({ date: newDate });
  };

  render() {
    const minimalDate = moment('04.08.2019', 'DD.MM.YYYY');
    const { date, format, mode, inputFormat, startOfWeek, availableDates } = this.state;
    return (
      <DateTimeField
        dateTime={date}
        format={format}
        minDate={minimalDate}
        inputFormat={inputFormat}
        onChange={this.handleChange}
        viewMode={mode}
        startOfWeek={startOfWeek}
        // availableDates={availableDates}
      />
    );
  }
}
// module.exports = DateTimePicker;
export default DateTimePicker
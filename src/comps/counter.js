import React, { Component, useState } from "react";

class Counter extends Component {
  state = { mayDate: "2025-02-01", days: "999" };

  componentDidMount() {
    let daysLeft = this.calcDaysFromDate(this.props.appDate);
    this.setState({ days: daysLeft });
  }
  componentDidUpdate(_props, _state) {
    if (this.props.appDate !== _props.appDate) {
      let daysLeft = this.calcDaysFromDate(this.props.appDate);
      this.setState({ days: daysLeft });
    }
    console.log(this.props);
    console.log(_props, _state);
  }
  calcDaysFromDate(_date) {
    let time = Date.parse(_date) - Date.parse(new Date());
    let days = time / (1000 * 60 * 60 * 24);
    return Math.floor(days);
  }

  render() {
    return (
      <div>
        <h2>החתונה של אריק והדר {/* {this.props.appDate} */}</h2>
        <h3>בעוד: {this.state.days} ימים</h3>
      </div>
    );
  }
}
export default Counter;

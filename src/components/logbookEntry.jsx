import React, { Component } from "react";
import axios from "axios";

class LogbookEntry extends React.Component {
  state = {
    logentry: {
      date: "",
      truck_no: "",
      start_time: "",
      end_time: "",
      driving_hours: "",
      total_hours: "",
      logbook: 1,
    },
  };

  handleSubmit = async (e) => {
    const { logentry } = this.state;
    e.preventDefault();
    // const post_object = {logentry.date, logentry.truck_no, logentry.start_time, logentry.end_time, logentry.driving_hours, logentry.total_hours, logentry.logbook}
    console.log(logentry);
    axios.post(process.env.REACT_APP_LOGBOOK_API, logentry);

    // localStorage.setItem("token", jwt.access);
    // console.log(localStorage.getItem("token"))
    window.location = "/logbook";
  };

  handleChange = (e) => {
    const logentry = { ...this.state.logentry };
    logentry[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ logentry });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="col m-2">
          <div class="m-2">
            <input
              onChange={this.handleChange}
              name="date"
              type="text"
              class="form-control"
              placeholder="Date"
            />
          </div>
          <div class="m-2">
            <input
              onChange={this.handleChange}
              name="truck_no"
              type="text"
              class="form-control"
              placeholder="Truck#"
            />
          </div>
          <div class="m-2">
            <input
              onChange={this.handleChange}
              name="start_time"
              type="text"
              class="form-control"
              placeholder="Start Time"
            />
          </div>
          <div class="m-2">
            <input
              onChange={this.handleChange}
              name="end_time"
              type="text"
              class="form-control"
              placeholder="End Time"
            />
          </div>
          <div class="m-2">
            <input
              onChange={this.handleChange}
              name="driving_hours"
              type="text"
              class="form-control"
              placeholder="Driving Hours"
            />
          </div>
          <div class="m-2">
            <input
              onChange={this.handleChange}
              name="total_hours"
              type="text"
              class="form-control"
              placeholder="Total"
            />
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default LogbookEntry;

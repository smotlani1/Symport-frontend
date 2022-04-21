import React, { Component } from "react";
import axios from "axios";
import { getJWT } from "../services/authService";
import { Link } from "react-router-dom";

class Logbook extends React.Component {
  state = {
    logEntries: [],
  };

  async componentDidMount() {
    const { data: logEntries } = await axios.get(
      process.env.REACT_APP_LOGBOOK_API
    );
    this.setState({ logEntries });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="m-4 text-center">Hi, here is your current log book</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Truck#</th>
              {/* <th>Pickup</th>
              <th>In</th>
              <th>Out</th>
              <th>Deliver</th>
              <th>In</th>
              <th>Out</th> */}
              <th>Start Time</th>
              <th>End Time</th>
              <th>Driving Hours</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {this.state.logEntries.map((logEntry) => (
              <tr key={logEntry.id}>
                {/* <td>
                      {<Link to={`/loads/${load.id}`}>{load.load_reference}</Link>}
                    </td> */}
                <td>{logEntry.date}</td>
                <td>{logEntry.truck_no}</td>
                {/* <td>{logEntry.pickup_address}</td>
                <td>{logEntry.time_in}</td>
                <td>{logEntry.time_out}</td>
                <td>{logEntry.delivery_address}</td>
                <td>{logEntry.delivery_timein}</td>
                <td>{logEntry.delivery_timeout}</td> */}
                <td>{logEntry.start_time}</td>
                <td>{logEntry.end_time}</td>
                <td>{logEntry.driving_hours}</td>
                <td>{logEntry.total_hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to='/logbook/new'>
          <button className="btn btn-primary">Add New Entry</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Logbook;

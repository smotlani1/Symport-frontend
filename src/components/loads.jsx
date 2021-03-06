import axios from "axios";
import React, { Component } from "react";
import { getJWT } from "../services/authService";
import { Link } from "react-router-dom";

axios.defaults.headers.common["Authorization"] = "JWT " + getJWT();

class Loads extends Component {
  state = {
    loads: [],
  };

  async componentDidMount() {
    const { data: loads } = await axios.get(
      process.env.REACT_APP_VIEWLOADS_API
    );
    this.setState({ loads });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="m-4 text-center">Hi, here are your upcoming loads</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Reference</th>
              {/* <th>Street</th> */}
              <th>City</th>
              <th>State</th>
              {/* <th>Zip</th> */}
              {/* <th>End Street</th> */}
              <th>End City</th>
              <th>End State</th>
              {/* <th>End Zip</th> */}
              {/* <th>Loaded Miles</th>
              <th>Hazmat?</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.loads.map((load) => (
              <tr key={load.load_reference}>
                <td>
                  {<Link to={`/loads/${load.id}`}>{load.load_reference}</Link>}
                </td>
                {/* <td>{load.start_street}</td> */}
                <td>{load.start_city}</td>
                <td>{load.start_state}</td>
                {/* <td>{load.start_zip}</td>
                <td>{load.end_street}</td> */}
                <td>{load.end_city}</td>
                <td>{load.end_state}</td>
                {/* <td>{load.end_zip}</td> */}
                {/* <td>{load.loaded_distance}</td>
                <td>{load.hazmat ? "Yes" : "No"}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Loads;

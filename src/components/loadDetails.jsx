import React, { Component } from "react";
import axios from "axios";

class LoadDetails extends React.Component {
  state = {
    loads: [],
    id: this.props.match.params.id,
    selectedFile: null,
    loadDocs: [],
  };

  async componentDidMount() {
    // Retrieve all loads and set state with loads array
    const id = this.state.id;
    const { data: loads } = await axios.get(
      process.env.REACT_APP_VIEWLOADS_API + id + '/'
    );
    this.setState({
      loads: loads,
      loadDocs: loads.loadimage.map((load) => this.state.loadDocs + load.image), //map nested load images URL to loadDoc in state
    });
  }

  handleUpload = (event) => {
    event.preventDefault();
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    let data = new FormData(); // creates a new FormData object
    // data.append("title", event.target.elements.title.value);
    // data.append("text", event.target.elements.content.value);
    data.append("image", this.state.selectedFile); // add your file to form data
    const url =
      "http://127.0.0.1:8000/loads/viewloads/" + this.state.id + "/uploads/";
    axios
      .post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const {
      start_street,
      start_city,
      start_state,
      start_zip,
      end_street,
      end_city,
      end_state,
      end_zip,
    } = this.state.loads;

    return (
      <div>
        <h2>
          {this.state.loads.start_city} to {this.state.loads.end_city} Load{" "}
          {this.state.loads.load_reference}
        </h2>
        <div name="load-details">
          <h5>Pickup From</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {start_street} {start_city} {start_state} {start_zip}
                </td>
                <td>Date / Time</td>
              </tr>
            </tbody>
          </table>
          <h5>Deliver To</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {end_street} {end_city} {end_state} {end_zip}
                </td>
                <td>Date / Time</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* map each image URL from load to an anchor element */}
        <div name="load-docs">
          <h3>Load Documents</h3>

          {this.state.loadDocs.map((loadDoc) => (
            <div>
              <a href={loadDoc}>Load Doc</a>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">
            Please Upload POD Below
          </label>

          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
            onChange={this.handleUpload}
          />
          <button
            className="btn btn-primary btn-sm"
            onClick={this.handleFormSubmit}
          >
            Upload!
          </button>
        </div>
      </div>
    );
  }
}

export default LoadDetails;

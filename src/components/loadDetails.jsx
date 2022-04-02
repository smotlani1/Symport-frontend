import React, { Component } from "react";
import axios from "axios";

class LoadDetails extends React.Component {
  state = {
    loads: [],
    id: this.props.match.params.id,
    selectedFile: null,
  };

  async componentDidMount() {
    const id = this.state.id;
    const { data: loads } = await axios.get(
      "http://127.0.0.1:8000/loads/viewloads/" + id
    );
    this.setState({ loads });
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
    const url = "http://127.0.0.1:8000/loads/viewloads/" + this.state.id + "/uploads/";
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
    return (
      <div>
        <h2>
          Load {this.state.loads.load_reference} from{" "}
          {this.state.loads.start_city} to {this.state.loads.end_city}{" "}
        </h2>
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

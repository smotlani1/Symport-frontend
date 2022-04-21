import React, { Component } from "react";

class LogbookEntry extends React.Component {
  state = {
    account: { username: "", password: "" },
  };

  render() {
    return (
      <form>
        <div class="col m-2">
          <div class ='m-2'>
            <input type="text" class="form-control" placeholder="Date" />
          </div>
          <div class ='m-2'>
            <input type="text" class="form-control" placeholder="Truck#" />
          </div>
          <div class ='m-2'>
            <input type="text" class="form-control" placeholder="Start Time" />
          </div>
          <div class ='m-2'>
            <input type="text" class="form-control" placeholder="End Time" />
          </div>
          <div class ='m-2'>
            <input type="text" class="form-control" placeholder="Driving Hours" />
          </div>
          <div class ='m-2'>
            <input type="text" class="form-control" placeholder="Total" />
          </div>
        </div>
        
      </form>
    );
  }
}

export default LogbookEntry;

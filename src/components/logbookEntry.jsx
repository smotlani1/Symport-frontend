import React, { Component } from "react";

class LogbookEntry extends React.Component {
  render() {
    return (
      <form>
        <div class="row m-2">
          <div class="col">
            <input type="text" class="form-control" placeholder="Date" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Truck#" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Start Time" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="End Time" />
          </div>
        </div>
        <div class="row m-2">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
          
        </div>
        <div class="row m-2">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        
      </form>
    );
  }
}

export default LogbookEntry;

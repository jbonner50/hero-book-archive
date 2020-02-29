import React, { Component } from "react";

class Book extends Component {
  state = {};
  render() {
    return (
      <div className="book col" id={this.props.id}>
        <label>Book {this.props.id}:</label>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="2020" />
          <label className="form-check-label" htmlFor="2020">
            2020
          </label>
        </div>
      </div>
    );
  }
}

export default Book;

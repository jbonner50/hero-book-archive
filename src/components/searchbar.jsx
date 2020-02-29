import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div id="search-bar" className="form-group">
        <input
          type="search"
          className="form-control"
          id="searchName"
          placeholder="Search by name"
        />
      </div>
    );
  }
}

export default SearchBar;

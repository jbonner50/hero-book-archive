import React, { Component } from "react";
import SearchResult from "./searchresult";

class SideBar extends Component {
  state = {};

  render() {
    return (
      <div id="sidebar" className="sidebar">
        <div className="sidebar-header">
          <h1>Search Results</h1>
          <hr className="sidebar-line" />
        </div>
        <div id="search-results">
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </div>
      </div>
    );
  }
}

export default SideBar;

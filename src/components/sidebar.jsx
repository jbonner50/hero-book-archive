import React, { Component } from "react";
import SearchResult from "./searchresult";

class SideBar extends Component {
  state = {};

  moveSidebar = collapsed => {
    let className = "sidebar";
    if (collapsed) {
      className += " collapsed";
    }
    return className;
  };

  render() {
    return (
      <div id="sidebar" className={this.moveSidebar(this.props.collapsed)}>
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

import React, { Component } from "react";
import SearchResult from "./searchresult";

class SideBar extends Component {
  state = {};

  moveSidebar = active => {
    let className = "sidebar";
    if (active) {
      className += " active";
    }
    return className;
  };

  generateSearchResults = (from, to, year, entry, book) => {
    let results = [];
    for (entry; entry <= 10; entry++) {
      results.push(
        <SearchResult
          from={from}
          to={to}
          year={year}
          entry={entry}
          book={book}
        />
      );
    }

    return results;
  };

  render() {
    return (
      <div id="sidebar" className={this.moveSidebar(this.props.sidebarActive)}>
        <div id="dismiss" onClick={() => this.props.onSidebarMove()}>
          <i class="fas fa-arrow-left"></i>
        </div>
        <div className="sidebar-header">
          <h1>Search Results</h1>
          <hr className="sidebar-line" />
        </div>
        <div id="search-results">
          {this.generateSearchResults("Michael", "Jackson", 2020, 9, 3)}
        </div>
      </div>
    );
  }
}

export default SideBar;

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
      <div id="sidebar" className={this.moveSidebar(this.props.collapsed)}>
        <div className="sidebar-header">
          <h1>Search Results</h1>
          <hr className="sidebar-line" />
        </div>
        <div id="search-results">
          {this.generateSearchResults("Michael", "Jackson", 2020, 5, 3)}
        </div>
      </div>
    );
  }
}

export default SideBar;

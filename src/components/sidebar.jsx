import React, { Component } from "react";
import SearchBar from "./searchbar";
import Book from "./book";
import SearchResult from "./searchresult";

class SideBar extends Component {
  state = {};

  moveSideBar = isExpanded => {
    let className = "active";
    if (isExpanded) {
      className = "";
    }
    return className;
  };
  render() {
    return (
      <div id="sidebar" className={this.moveSideBar(this.props.isExpanded)}>
        <div className="sidebar-header">
          <h1>Result</h1>
          <hr className="sidebar-line" />
        </div>
        <div id="search-group" className="sidebar-card">
          {/* <form>
            <SearchBar />
            <div className="filter-year form-group row">
              <Book id={1} />
              <Book id={2} />
              <Book id={3} />
            </div>
            <div id="btn-group" className="d-flex justify-content-end">
              <button id="reset-btn" type="button" className="btn btn-sm">
                Reset
              </button>
              <button
                id="search-btn"
                type="submit"
                className="btn btn-primary btn-sm"
              >
                Search
              </button>
            </div>
          </form> */}
        </div>
        <div id="result-group">
          <SearchResult />
        </div>
      </div>
    );
  }
}

export default SideBar;

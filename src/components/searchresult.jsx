import React, { Component } from "react";

class SearchResult extends Component {
  state = {};
  render() {
    return (
      <div className="search-result sidebar-card row">
        <div className="col">
          <div className="from-to">From John to Doe</div>
          <div className="result-meta">2020 </div>
        </div>
        <div className="book-entry d-flex col">Book #, Entry #</div>
      </div>
    );
  }
}

export default SearchResult;

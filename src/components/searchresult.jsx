import React, { Component } from "react";

class SearchResult extends Component {
  state = {};
  render() {
    return (
      <div className="search-result">
        <div className="from-to">From John to Doe</div>
        <div className="year">2020 </div>
        <div className="book-entry">Book #, Entry #</div>
      </div>
    );
  }
}

export default SearchResult;

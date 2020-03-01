import React, { Component } from "react";

class SearchResult extends Component {
  state = {};

  render() {
    const { from, to, year, entry, book } = this.props;

    return (
      <div className="search-result">
        <div className="address">
          <div className="from">
            <span className="from">From: </span>
            <span>{from}</span>
          </div>
          <div className="to">
            <span className="to">To: </span>
            <span>{to}</span>
          </div>
          <div className="year">
            <span className="year">Year: </span>
            <span>{year}</span>
          </div>
        </div>

        <div className="book-entry">
          <div className="book">
            <span className="book">Book #</span>
            <span>{book}</span>
          </div>
          <div className="entry">
            <span className="entry">Entry #</span>
            <span>{entry}</span>
          </div>
        </div>

        <br style={{ clear: "both" }} />
      </div>
    );
  }
}

export default SearchResult;

import React, { Component } from "react";
import icon from "../media/SACiconRED.png";

//stateless functional component
//can't use lifecycle hooks

class NavBar extends Component {
  state = {
    chevronRotated: false
  };

  generateCheckboxes = (startYear, endYear) => {
    let checkboxes = [];
    for (var year = startYear; year >= endYear; year--) {
      checkboxes.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return checkboxes;
  };

  onClearSearch = search => {
    search.value = "";
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div id="menu-btn-group">
          <a href="#" className="nav-item">
            <img src={icon} alt="SAC Icon" height="50px" />
          </a>
          <button
            id="sidebar-btn"
            className="nav-item btn btn-secondary"
            onClick={() => this.props.onSidebarMove()}
          >
            <i id="bars" className="fas fa-bars" />
          </button>
        </div>
        <button
          id="navbar-toggler-btn"
          className="btn btn-secondary nav-item navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <i id="chevron" className="fas fa-chevron-down" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <form
            name="search-entries"
            onSubmit={e => this.props.onSubmit(e, this.search, this.filter)}
            method="GET"
          >
            {/*onSubmit={this.handleSubmit}*/}
            <ul className="navbar-nav mr-0">
              <li className="nav-item">
                <input
                  id="search-bar"
                  name="search-bar"
                  className="form-control"
                  type="text"
                  placeholder="Search by name"
                  ref={el => (this.search = el)}
                  value={this.state.search}
                  //onChange={this.props.onSearch}
                />
              </li>

              <li className="nav-item">
                <button
                  id="clear-btn"
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => this.onClearSearch(this.search)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>

              <li className="nav-item">
                <select
                  name="filter-year"
                  id="filter-year"
                  className="selectpicker"
                  title="Filter Year"
                  data-selected-text-format="count > 4"
                  data-actions-box="true"
                  data-style="btn"
                  // value={this.state.filter}
                  // onChange={this.props.onFilter}
                  ref={el => (this.filter = el)}
                  multiple
                >
                  {this.generateCheckboxes(2020, 2010)}
                </select>
              </li>

              <li className="nav-item">
                <button
                  id="search-btn"
                  type="submit"
                  className="btn btn-primary"
                >
                  Search
                </button>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;

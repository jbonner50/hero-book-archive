import React, { Component } from "react";
import icon from "../media/SACiconRED.png";

//stateless functional component
//can't use lifecycle hooks

class NavBar extends Component {
  state = {};

  generateCheckboxes = (startYear, endYear) => {
    let checkboxes = [];
    for (var year = startYear; year >= endYear; year--) {
      checkboxes.push(<option value={year}>{year}</option>);
    }

    return checkboxes;
  };

  rotateChevron = collapsed => {
    let className = "fas fa-chevron-left";
    if (collapsed) {
      className += " collapsed";
    }
    return className;
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
            <i
              id="chevron"
              className={this.rotateChevron(this.props.collapsed)}
            />
          </button>
        </div>
        <button
          id="navbar-toggler-btn"
          className="btn btn-secondary nav-item navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <i class="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <form name="search-entries">
            <ul className="navbar-nav mr-0">
              <li className="nav-item">
                <input
                  id="search-bar"
                  className="form-control"
                  type="text"
                  placeholder="Search by name"
                />
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
                  multiple
                >
                  {this.generateCheckboxes(2020, 2010)}
                </select>
              </li>

              <li class="nav-item">
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

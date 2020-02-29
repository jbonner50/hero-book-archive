import React, { Component } from "react";
import icon from "../media/SACiconRED.png";

//stateless functional component
//can't use lifecycle hooks

class NavBar extends Component {
  generateCheckboxes = (startYear, endYear) => {
    let checkboxes = [];
    for (var year = startYear; year >= endYear; year--) {
      checkboxes.push(<option value={year}>{year}</option>);
    }

    return checkboxes;
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={icon} alt="SAC Icon" height="60px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
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
              <button id="search-btn" type="submit" className="btn btn-primary">
                Search
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );

    {
      /* <button
          type="button"
          id="sideBarBtn"
          className="btn "
          onClick={() => this.props.onSideBarButtonPress()}
        >
          <i
            id="chevron"
            className={this.rotateChevron(this.props.isExpanded)}
          ></i>
        </button>
        <form>
          <SearchBar />
        </form>

        <a href="https://sacgrading.com/" className="navbar-brand m-2">
          <img id="icon" src={icon} alt="SAC Icon" height="80" />
        </a>
      </nav> */
    }
  }
}

export default NavBar;

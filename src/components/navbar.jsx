import React, { Component } from "react";
import icon from "../media/SACiconRED.png";
import SearchBar from "./searchbar";
//stateless functional component
//can't use lifecycle hooks

class NavBar extends Component {
  rotateChevron = isExpanded => {
    let className;
    if (isExpanded) {
      className = "fas fa-chevron-left";
    } else {
      className = "fas fa-chevron-left active";
    }
    return className;
  };

  render() {
    return (
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div id="navbar-container" className="container-fluid">
          <div class="navbar-nav mr-auto">
            {" "}
            <button
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
          </div>

          <a href="https://sacgrading.com/" className="navbar-brand m-2">
            <img id="icon" src={icon} alt="SAC Icon" height="80" />
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;

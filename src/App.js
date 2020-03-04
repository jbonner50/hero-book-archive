import React, { Component } from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import PDFview from "./components/pdfviewer";
import Footer from "./components/footer";

//render() is called whenever state changes or new props are given to it

class App extends Component {
  state = {
    sidebarActive: false,
    search: "",
    filter: []
  };

  handleSidebarMove = () => {
    const sidebarActive = !this.state.sidebarActive;
    this.setState({ sidebarActive });
  };

  addActive = (prevClass, active) => {
    let className = prevClass;
    if (active) {
      className += " active";
    }
    return className;
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  handleFilter = e => {
    const options = e.target.options;
    var years = [];
    for (var i = 0; i < options.length; i++) {
      if (options[i].selected) {
        years.push(options[i].value);
      }
    }
    this.setState({ filter: years });
  };

  handleSubmit = (e, search, filter) => {
    e.preventDefault();

    const options = filter.options;
    var years = [];
    for (var i = 0; i < options.length; i++) {
      if (options[i].selected) {
        years.push(options[i].value);
      }
    }
    this.setState({ filter: years });

    this.setState({ search: search.value });
    console.log("Search Submitted");
  };

  handleSubmit = (e, search, filter) => {
    e.preventDefault();

    const options = filter.options;
    var years = [];
    for (var i = 0; i < options.length; i++) {
      if (options[i].selected) {
        years.push(options[i].value);
      }
    }
    this.setState({ filter: years });

    this.setState({ search: search.value });
    console.log("Search Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <SideBar
            sidebarActive={this.state.sidebarActive}
            onSidebarMove={this.handleSidebarMove}
          />
          <div
            id="content"
            className={this.addActive("", this.state.sidebarActive)}
          >
            <div id="nav-pdf">
              <NavBar
                sidebarActive={this.state.sidebarActive}
                onSidebarMove={this.handleSidebarMove}
                onSubmit={this.handleSubmit}
                onSearch={this.handleSearch}
                onFilter={this.handleFilter}
                onClear={this.handleClear}
              />
              <PDFview />
            </div>
            <Footer />
          </div>
        </div>
        <div
          className={this.addActive("overlay", this.state.sidebarActive)}
        ></div>
      </React.Fragment>
    );
  }
}

export default App;

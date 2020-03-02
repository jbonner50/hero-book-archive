import React, { Component } from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import PDFview from "./components/pdfviewer";
import Footer from "./components/footer";

//render() is called whenever state changes or new props are given to it

class App extends Component {
  state = {
    sidebarActive: false
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
                onSidebarMove={this.handleSidebarMove}
                sidebarActive={this.state.sidebarActive}
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

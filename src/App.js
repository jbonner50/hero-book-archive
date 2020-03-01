import React, { Component } from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import PDFview from "./components/pdfviewer";
import Footer from "./components/footer";

//render() is called whenever state changes or new props are given to it

class App extends Component {
  state = {
    sidebarCollapsed: true
  };

  handleSidebarMove = () => {
    const sidebarCollapsed = !this.state.sidebarCollapsed;
    this.setState({ sidebarCollapsed });
  };

  moveContent = collapsed => {
    let className = "";
    if (collapsed) {
      className += " collapsed";
    }
    return className;
  };

  render() {
    return (
      <div className="wrapper">
        <SideBar collapsed={this.state.sidebarCollapsed} />
        <div
          id="content"
          className={this.moveContent(this.state.sidebarCollapsed)}
        >
          <div id="nav-pdf">
            <NavBar
              onSidebarMove={this.handleSidebarMove}
              collapsed={this.state.sidebarCollapsed}
            />
            <PDFview />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

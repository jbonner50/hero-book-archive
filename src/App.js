import React, { Component } from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import PDFview from "./components/pdfviewer";

//render() is called whenever state changes or new props are given to it

class App extends Component {
  state = {
    sidebarIsExpanded: true
  };

  handleMoveSideBar = () => {
    const sidebarIsExpanded = !this.state.sidebarIsExpanded;
    console.log(this.state.sidebarIsExpanded);
    this.setState({ sidebarIsExpanded });
  };

  moveContent = isExpanded => {
    let className = "active";
    if (isExpanded) {
      className = "";
    }
    return className;
  };

  render() {
    console.log(this.state.sidebarIsExpanded);
    return (
      <React.Fragment>
        <NavBar
          onSideBarButtonPress={this.handleMoveSideBar}
          isExpanded={this.state.sidebarIsExpanded}
        />
        <div
          id="content"
          className={this.moveContent(this.state.sidebarIsExpanded)}
        >
          <SideBar isExpanded={this.state.sidebarIsExpanded} />
          <PDFview />
        </div>
      </React.Fragment>
    );
    /*
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("app-constructor");
    //can't call setState here
    //this.state = this.props.something
    //can only call this.props if props is in super and constructor
  }

  componentDidMount() {
    //ajax call can be placed here
    console.log("app-mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("app-rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
	}
	*/
  }
}

export default App;

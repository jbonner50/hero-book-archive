import React, { Component } from "react";
import logo from "../media/SAClogoRED.png";
//stateless functional component
//can't use lifecycle hooks
const NavBar = ({ totalCounters }) => {
  console.log("navbar-rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <button className="btn btn-danger btn-md m-2">☰</button>
      <a href="https://sacgrading.com/" className="navbar-brand m-2">
        <img src={logo} alt="logo" height="80" />
      </a>
    </nav>
  );
};

export default NavBar;

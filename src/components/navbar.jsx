import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Navbar
            <span className="badge rounded-pill text-bg-info m-3">
              {this.props.totalCounters}
            </span>
          </span>
        </div>
      </nav>
    );
  }
}
export default NavBar;

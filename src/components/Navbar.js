import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <strong>
            <Link to="/" className="navbar-item" id="logo-heading" title="Logo">
              ELSPETH SPARLING
            </Link>
            </strong>
          </div>
          {/*Commented out for construction notice*/}
          {/*<div*/}
          {/*  id="navMenu"*/}
          {/*  className={`navbar-menu ${this.state.navBarActiveClass}`}*/}
          {/*>*/}
          {/*  <div className="navbar-end has-text-centered">*/}
          {/*  <div className="navbar-start has-text-centered">*/}
          {/*    <Link className="navbar-item" to="/about">*/}
          {/*      ABOUT*/}
          {/*    </Link>*/}
          {/*    <Link className="navbar-item" to="/contact">*/}
          {/*      CONTACT*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </nav>
    );
  }
};

export default Navbar;

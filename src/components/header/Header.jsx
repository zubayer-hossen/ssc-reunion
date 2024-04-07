import React from "react";
import "./Header.css";

import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Navigation">
      <Navbar className="navbar" expand="md">
        <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
          <img src="images/logo.png" alt=".;" width="80px" />
        </NavbarBrand>
        <Nav className="mr-md-5" navbar>
          <NavItem>
            <NavLink to="/member" className="Navlink" activeClassName="active">
              Members
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/gallery" className="Navlink" activeClassName="active">
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin" className="Navlink" activeClassName="active">
              Admin
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;

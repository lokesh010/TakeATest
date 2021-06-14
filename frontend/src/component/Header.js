import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuth, signout } from "../action/authAction";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from '../assets/homepage/images/logo.png'
import { withRouter } from "react-router-dom";

const Header = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        {/* Logo */}
        <Link to="/">
          <NavbarBrand
            style={{ cursor: "pointer" }}
            className="font-weight-bold"
          >
            <img src={logo} height="60" />
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        {/* Home */}
        <Nav className="ml-auto" navbar>
          {!isAuth() && (
            <NavItem>
              <Link to="/">
                <NavLink style={{ cursor: "pointer", fontSize: '1.2em' }}>Home</NavLink>
              </Link>
            </NavItem>
          )}
        </Nav>
      {/* Dashboard link */}
          {isAuth() && isAuth().role === 'admin' ? 
        <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/admin/dashboard">
                <NavLink style={{ cursor: "pointer", fontSize: '1.2em' }}>Dashboard</NavLink>
              </Link>
            </NavItem>
            </Nav>
           :
           isAuth() && isAuth().role === 'student'?
           <Nav>
            <NavItem>
              <Link to="/student/dashboard">
                <NavLink style={{ cursor: "pointer", fontSize: '1.2em' }}>Dashboard</NavLink>
              </Link>
            </NavItem>
        </Nav>
        :null
          }
        {/* right nav */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <>
                <NavItem>
                  <Link to="/signup">
                    <NavLink style={{ cursor: "pointer", fontSize: '1.2em' }}>Register</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/student/signin">
                    <NavLink style={{ cursor: "pointer", fontSize: '1.2em' }}>Student Login</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/admin/signin">
                    <NavLink style={{ cursor: "pointer", fontSize: '1.2em' }}>Admin Login</NavLink>
                  </Link>
                </NavItem>
              </>
            )}
            {/* Sign out */}
            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => history.push("/home"))}
                >
                  SignOut
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);

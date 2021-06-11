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
        <Link to="/">
          <NavbarBrand
            style={{ cursor: "pointer" }}
            className="font-weight-bold"
          >
            <img src={logo} height="60"/>
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        
        <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link to="/">
                    <NavLink style={{ cursor: "pointer", fontSize: '1.2em' }}>Home</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

          </Nav>
        {/* right nav */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <React.Fragment>
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
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link to="/user">
                  <NavLink style={{ cursor: "pointer" }}>{`${
                    isAuth().name
                  }'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}          

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

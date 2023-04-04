import React from "react";
import stlImage from "../components/stl-image.png";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { doLogout, getCurrentUserDetail, isLogggedIn } from "../authentication";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  NavbarBrand,
  NavLink,
  NavItem,
} from "react-bootstrap";
import userContext from "../context/userContext";

const NavbarElements = () => {
  let navigate = useNavigate();
  const userContextData = useContext(userContext);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLogggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      // logged out
      setLogin(false);
      userContextData.setUser({
        data: null,
        login: false,
      });
      navigate("/");
    });
  };

  return (
    <div>
      <Navbar bg="secondary" expand="lg" className="px-5">
        <Container>
          <Navbar className="my-2">
            <NavbarBrand href="/">
              <img
                alt="bank"
                src={stlImage}
                style={{
                  height: 60,
                  width: 80,
                }}
              />
            </NavbarBrand>
          </Navbar>
          <Navbar.Brand tag={ReactLink} href="/">
            Banking Application
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" color="dark">
            <Nav className=".navbar-brand" color="dark">
              <NavLink tag={ReactLink} href="/about">
                About Us
              </NavLink>

              {/* <NavLink tag={ReactLink} href = "/login" > Login </NavLink>
            <NavLink tag={ReactLink} href = "/signup" > Register </NavLink> */}

              <NavLink tag={ReactLink} href="/contactus">
                Contact Us
              </NavLink>
            </Nav>

            <Nav navbar>
              {login && (
                <>
                  {/* 
                <NavItem>
                   <NavLink tag={ReactLink} href = "/customer/dashboard"></NavLink>   
                </NavItem> */}
                  <NavItem>
                    <NavLink tag={ReactLink} href="/customer/profileinfo">
                      Profile Info
                    </NavLink>
                  </NavItem>
                  <NavDropdown
                    className="navdrop"
                    title="Account"
                    id="basic-nav-dropdown"
                  >
                    {/* <NavDropdown.Item tag={ReactLink} href="/account">Account</NavDropdown.Item> */}

                    <NavDropdown.Item
                      tag={ReactLink}
                      href={`/customer/accountdetails/${user.acctID}`}
                    >
                      Account Details
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      tag={ReactLink}
                      href={"/customer/withdraw"}
                    >
                      Withdraw
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      tag={ReactLink}
                      href={"/customer/deposit"}
                    >
                      Deposit
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      tag={ReactLink}
                      href={`/customer/transactionshistory/${user.acctID}`}
                    >
                      Transaction History
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown title="Fund" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      tag={ReactLink}
                      href="/customer/fundtransferbtw2"
                    >
                      Fund Transfer between two accounts
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      tag={ReactLink}
                      href="/customer/thirdpartytransfer"
                    >
                      Third Party Transfer
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavItem>
                    <NavLink>{user.email}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={logout}>Logout</NavLink>
                  </NavItem>
                </>
              )}

              {!login && (
                <>
                  <NavItem>
                    <NavLink tag={ReactLink} href="/login">
                      Login
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={ReactLink} href="/signup">
                      Register
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* // <div>
	// <Nav>
		
	// 	<Bars />

	// 	<NavMenu>
	// 	<div style={{'image': `url(${images[1]})`}}></div>
	// 	<NavLink to='/about'>About</NavLink>
	// 	<NavLink to='/Covid Cases'>Covid Cases</NavLink>
	// 	<NavLink to='/blogs'>Blogs</NavLink>
	// 	<NavLink to='/pat-sign-up'> Patient Sign-up</NavLink>
	// 	<NavLink to='/doc-sign-up'> Doctor Sign-up</NavLink>

	// 	</NavMenu>
    //     <NavBtn>
	// 	<NavBtnLink to='/close'>Close</NavBtnLink>
	// 	</NavBtn>

	// </Nav> */}
      {/* <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Personal Care..
						<br></br>Professional Approach</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Healing Hearts.
						<br>
						</br>
						Caring Hands
					</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Right Care..
						<br>
						</br>
						Right at home
					</span>
                </div>
            </div>
        </Slide> */}
    </div>
  );
};

export default NavbarElements;

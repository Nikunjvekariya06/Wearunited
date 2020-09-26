import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Grid container className="main-header">
        <Grid item xs={4}>
          <div>
            <SearchIcon className="serchicon" style={{ fontSize: "30px" }} />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="logo-heading">
            <span className="main-logo-heading">WEAR</span>{" "}
            <span className="sub-logo-heading">UNITED</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="button-block">
            <button className="sell-button">SELL AN ARTICLE</button>
            <span className="icon">
              <LocalMallOutlinedIcon />
            </span>
            <span className="icon">
              <FavoriteBorderOutlinedIcon />
            </span>
            <span className="icon">
              <NotificationsNoneOutlinedIcon />
            </span>
            <span className="icon">
              <PersonOutlineOutlinedIcon />
            </span>
          </div>
        </Grid>
      </Grid>
      <div className="menu">
        <Navbar className="menu-navbar" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="menu-items">
                <NavLink href="/">Women</NavLink>
              </NavItem>
              <NavItem className="menu-items">
                <NavLink href="/">Men</NavLink>
              </NavItem>
              <NavItem className="menu-items">
                <NavLink href="/">Designer</NavLink>
              </NavItem>
              <NavItem className="menu-items">
                <NavLink href="/">Jewelry & Watches</NavLink>
              </NavItem>
              <NavItem className="menu-items">
                <NavLink href="/">Kids</NavLink>
              </NavItem>
              <NavItem className="menu-items">
                <NavLink href="/">Sport</NavLink>
              </NavItem>
              <NavItem className="menu-items">
                <NavLink href="/">Rental</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="menu-items-right">
              <NavLink href="/">Shops</NavLink>
            </NavbarText>
            <NavbarText className="menu-items-right">
              <NavLink href="/">For Good!</NavLink>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;

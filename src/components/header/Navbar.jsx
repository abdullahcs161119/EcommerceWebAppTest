import React from "react";
import { Navbar } from "react-bootstrap";
import { Header2ndMenu } from "./Header2ndMenu";
import { HeaderMenu } from "./HeaderMenu";
import "../../styles/header.scss";
import logo from "../../assets/images/logo.jpg";
//import { Logo } from "./../reusableComponents/Logo";
export const MyNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="my-header-wrapper"
      sticky="top"
    >
      <Navbar.Brand href="#home">
        <img style={{ height: "8vh" }} src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <HeaderMenu />
        <Header2ndMenu />
      </Navbar.Collapse>
    </Navbar>
  );
};

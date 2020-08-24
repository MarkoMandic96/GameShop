/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import logo from "../images/Logo.png"
import Container from "./Container"
import styles from "./Navigation.module.css"
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

const Logo = () => (
  <a
    href="../"
    sx={{
      p: 3,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    }}
  >
    <img
      src={logo}
      sx={{
        width: ["25px", "40px", "50px"],
        height: ["25px", "40px", "50px"], 
        borderRadius: ["12px", "20px", "25px"],   
        backgroundColor: "white",
      }}
      alt="logo"
    />
    <h2
      sx={{
        m: 0,
        alignSelf: "center",
        fontFamily: "Palatino",
        fontWeight: "heading",
        fontSize: [24, 36, 30],
        color: "primaryWhite",
        px: 2,
      }}
    >
      HardRollers
    </h2>
  </a>
)

const Nav = ({ menuItems }) => {
  return (
    <ul className={styles.navList}>
      {menuItems.map(({ text, link }) => (
        <Link key={text} to={link}>
          <li
            className={styles.navLinks}
            sx={{
              fontFamily: "Palatino",
              fontSize: [12, 18, 24],
              fontWeight: "heading",
            }}
          >
            {text}
          </li>
        </Link>
      ))}
    </ul>
  )
}

const Navigation = ({ menuItems }) => {
  return (
    <Navbar
      bg={styles.customColor}
      variant="dark"
      expand="lg"
      style={{
        padding: "0px",
        top: "0px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "fixed",
        opacity: "0.95",
        zIndex: "2",
      }}
      className={styles.customColor}
    >
      <Logo />
      <Navbar.Toggle
        className={styles.hamburgerMenu}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav menuItems={menuItems} />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation

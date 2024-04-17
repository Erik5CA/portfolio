import "../styles/Navbar.css";
import list from '../assets/list.svg'
import close from "../assets/close.svg";
import { useState } from "react";

export function Navbar() {

  const [show, setShow] = useState(false)

  const handleChange = () => {
    setShow(!show)
  }

  return (
    <nav className="container-navbar">
      <div className="navbar-logo">Erik Castillo</div>
      <div>
        <ul className="container-navbar-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </div>
      <button className="burger-button" onClick={handleChange}>
        <img src={list} alt="" />
      </button>
      {/* <div className={`menu-mobile ${show ? 'show' : ''}`}
      onClick={handleChange}>
        <ul className="container-navbar-links-mobile">
          <button className="button-close" onClick={handleChange}>
            <img src={close} alt="" />
          </button>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

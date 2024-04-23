import "../styles/Navbar.css";
import list from '../assets/list.svg'
import close from "../assets/close.svg";
import cv from '../public/ErikCastilloCV.pdf'
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
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href={cv} target="_blank" rel="noreferrer">
              CV
            </a>
          </li>
        </ul>
      </div>
      <button className="burger-button" onClick={handleChange}>
        <img src={show ? close : list} alt="" />
      </button>
      <div
        className={`menu-mobile ${show ? "show" : ""}`}
        onClick={handleChange}
      >
        <ul className="container-navbar-links-mobile">
          <button className="button-close" onClick={handleChange}>
            <img src={close} alt="" />
          </button>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href={cv} target="_blank" rel="noreferrer">
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

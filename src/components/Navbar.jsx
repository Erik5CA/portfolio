import "../styles/Navbar.css";

export function Navbar() {
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
      <div>
        <svg
          width={"30px"}
          height={"30px"}
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="burguer-svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
}

import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-link" href="./">
                <i className="fa-solid fa-house me-2"></i>
                Inicio
            </a>
            <a className="nav-link" href="https://www.linkedin.com/in/agustin-fizzano/">
                <i className="fa-brands fa-linkedin me-1"></i>
              Linkedin
            </a>
            <a className="nav-link" href="https://github.com/TutozGhub/">
                <i className="fa-brands fa-github me-1"></i>
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

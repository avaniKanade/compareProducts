import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ compareCount }) {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Product Compare
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/compare" ? "active" : ""}`}
                to="/compare"
              >
                Compare {compareCount > 0 && <span className="badge bg-warning text-dark ms-1">{compareCount}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

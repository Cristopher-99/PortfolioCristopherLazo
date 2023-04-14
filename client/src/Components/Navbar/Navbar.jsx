import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logovioleta.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navegador ">
      <div class="container-fluid">
        <Link style={{ textDecoration: "none" }} to="/">
          <img
            src={logo}
            class="rounded border border-light float-start"
            style={{ width: "70px" }}
            alt="..."
          />
        </Link>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDark"
          aria-controls="navbarDark"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse " id="navbarDark">
          <ul class="navbar-nav me-auto mb-2 mb-xl-0 text-center">
            <li class="nav-item ">
              <Link style={{ textDecoration: "none" }} to="/">
                <span className="nav-link mt-1 route-hover ">
                  <i class="bi bi-house"></i>
                  Home
                </span>
              </Link>
            </li>
            <li class="nav-item ">
              <Link style={{ textDecoration: "none" }} to="/projects">
                <span className="nav-link mt-1 route-hover ">
                  <i class="bi bi-projector-fill"></i>
                  Projects
                </span>
              </Link>
            </li>
            <li class="nav-item">
              <Link style={{ textDecoration: "none" }} to="/about">
                <span className="nav-link mt-1 route-hover">
                  <i class="bi bi-people-fill"></i>
                  About me
                </span>
              </Link>
            </li>
            <li class="nav-item ">
              <Link style={{ textDecoration: "none" }} to="/Contact">
                <span className="nav-link mt-1 route-hover ">
                  <i class="bi bi-house-fill " />
                  Contact
                </span>
              </Link>
            </li>
          </ul>
          {/* <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

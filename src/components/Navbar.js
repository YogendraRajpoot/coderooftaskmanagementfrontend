import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetTask } from "../Redux/task/taskAction";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    dispatch(resetTask([]));
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark "
      style={{ zIndex: "1" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Task App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link
                className="btn btn-outline-primary mx-1"
                to="/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className="btn btn-outline-primary mx-1"
                to="/signup"
                role="button"
              >
                Signup
              </Link>
            </form>
          ) : (
            <button
              type="button"
              className="btn btn-outline-primary mx-1"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

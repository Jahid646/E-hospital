import React, { useContext } from "react";

import { NavLink, useHistory } from "react-router-dom";
import logo from "../../../images/logo.png";
import icon from "../../../images/icon.png";
import { UserContext } from "../../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const history = useHistory();
  const logout = () => {
    history.push("/");
    localStorage.removeItem("user");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info navbar-light fontWeight">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              height="60"
              className="d-inline-block align-top"
              alt="E-health Hospital Logo"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center fw-bold">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/specialists">
                  Our Specialists
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>

              {user?.email ? (
                <div>
                  <li className="nav-item">
                    <a className="nav-link" href="/" onClick={logout}>
                      {" "}
                      Logout
                    </a>
                  </li>
                </div>
              ) : (
                <div>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      {" "}
                      Login
                    </NavLink>
                  </li>
                </div>
              )}

              <div>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    {" "}
                    Signup
                  </NavLink>
                </li>
              </div>
              {user?.email && (
                <li className="nav-item">
                  <h5 className="ml-3 mt-2">{user.email}</h5>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container p-5 d-flex justify-content-center">
        <img src={icon} height="50" alt="" />
        <h1>
          E-health <span className="text-info">Hospital</span>{" "}
        </h1>
      </div>
      <hr />
    </>
  );
};

export default Header;

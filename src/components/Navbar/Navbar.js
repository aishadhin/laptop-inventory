import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, LogOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <span className="navbar-brand">Laptop</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>

              </li>
              <li className="nav-item">
                <Link to="/manage-inventory" className="nav-link active" aria-current="page">
                  Manage Inventory
                </Link>
              </li>

              {user ? (
                <>
                  {" "}

                  <li className="nav-item">
                    <Link to="/my-product" className="nav-link active" aria-current="page">
                      My Items
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link active" aria-current="page">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link active" aria-current="page">
                      {user.displayName}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-primary nav-link active" aria-current="page" onClick={LogOut}>
                      LogOut
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/register"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

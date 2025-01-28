import React from "react";
import { Outlet, Link ,useLocation } from "react-router-dom";
import "../styles/AdminPage.CSS"; // Custom CSS for admin page


const AdminPage = () => {
  const location = useLocation();

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      {/* Navbar for Admin */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link to="/admin" className="navbar-brand">
            <i className="fas fa-book me-2"></i>Admin Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#adminNavbar"
            aria-controls="adminNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/admin/users"
                  className={`nav-link ${
                    location.pathname === "/admin/users" ? "active" : ""
                  }`}
                >
                  <i className="fas fa-users me-1"></i>Users
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin/books"
                  className={`nav-link ${
                    location.pathname === "/admin/books" ? "active" : ""
                  }`}
                >
                  <i className="fas fa-book-open me-1"></i>Books
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin/requests"
                  className={`nav-link ${
                    location.pathname === "/admin/requests" ? "active" : ""
                  }`}
                >
                  <i className="fas fa-clipboard-list me-1"></i>Requests
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Render nested routes */}
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
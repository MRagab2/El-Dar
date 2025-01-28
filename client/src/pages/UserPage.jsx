import React from "react";
import { Outlet, Link } from "react-router-dom";
import BookList from "../components/User/BookList";
import ShoppingCart from "../components/User/ShoppingCart";

const UserPage = () => {
  return (
    <div className="container mt-4">
      <h1>User Dashboard</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link to="/user" className="navbar-brand">
            User
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/user/profile" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-8">
          <BookList />
        </div>
        <div className="col-md-4">
          <ShoppingCart />
        </div>
      </div>
      <Outlet /> {/* Renders nested routes like BookDetails */}
    </div>
  );
};

export default UserPage;
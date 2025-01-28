import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to the Book Store</h1>
      <div className="mt-4">
        <Link to="/user" className="btn btn-primary me-2">
          User View
        </Link>
        <Link to="/admin" className="btn btn-secondary">
          Admin View
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
import React from "react";
import { mockBooks } from "../../data/mockBooks";
import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <div>
      <h1 className="mb-4">Books</h1>
      <div className="row">
        {mockBooks.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <p className="card-text">${book.price}</p>
                <Link to={`/user/book/${book.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
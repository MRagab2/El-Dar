import React from "react";
import { useParams } from "react-router-dom";
import { mockBooks } from "../../data/mockBooks";

const AdminBookDetails = () => {
  const { id } = useParams();
  const book = mockBooks.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{book.title}</h1>
          <p className="card-text">Author: {book.author}</p>
          <p className="card-text">Price: ${book.price}</p>
          <p className="card-text">Description: {book.description}</p>
          <button className="btn btn-warning me-2">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AdminBookDetails;
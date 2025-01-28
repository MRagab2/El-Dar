import React from "react";
import { mockBooks } from "../../data/mockBooks";
import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <div className="book-list">
      <h2 className="mb-4">Books</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>${book.price}</td>
              <td>
                <Link
                  to={`/admin/book/${book.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/books/add" className="btn btn-success">
        <i className="fas fa-plus me-1"></i>Add New Book
      </Link>
    </div>
  );
};

export default BookList;
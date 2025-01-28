import React from "react";
import { mockRequests } from "../../data/mockRequests";

const RequestList = () => {
  return (
    <div className="request-list">
      <h2 className="mb-4">Requests</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Book ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.userId}</td>
              <td>{request.bookId}</td>
              <td>{request.status}</td>
              <td>
                <button className="btn btn-warning btn-sm">Change Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
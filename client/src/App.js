import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import BookDetails from "./components/User/BookDetails";
import UserProfile from "./components/User/UserProfile";
import AdminBookDetails from "./components/Admin/AdminBookDetails";
import UserList from "./components/Admin/UserList";
import BookList from "./components/Admin/BookList";
import RequestList from "./components/Admin/RequestList";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />}>
            <Route path="book/:id" element={<BookDetails />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="users" element={<UserList />} />
            <Route path="books" element={<BookList />} />
            <Route path="requests" element={<RequestList />} />
            <Route path="book/:id" element={<AdminBookDetails />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
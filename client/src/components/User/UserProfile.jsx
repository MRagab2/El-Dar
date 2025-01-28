import React, { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Profile</h1>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
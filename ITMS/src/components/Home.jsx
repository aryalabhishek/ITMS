import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const isLoggedIn = false;
  return (
    <div>
      <h1>Home</h1>
      {isLoggedIn && <Outlet />}
    </div>
  );
};

export default Home;

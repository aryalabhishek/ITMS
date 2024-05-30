import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About us</h1>
      <button onClick={() => navigate("/")}>back to Home page</button>
    </div>
  );
};

export default AboutUs;

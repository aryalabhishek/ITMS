import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import UserForm from "./components/UserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "about", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <UserForm />,
  },
  // always on last
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

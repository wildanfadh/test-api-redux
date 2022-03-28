import React from "react";
import { useLocation } from "react-router-dom";
import { LoginComp, RegisterComp } from "../components";

// style
import "../styles/auth/Auth.css"; // Auth.css

const AuthView = (props) => {
  const Location = useLocation();

  switch (Location.pathname) {
    case "/login":
      return <LoginComp />;
    case "/register":
      return <RegisterComp />;
    default:
      return <LoginComp />;
  }
};


export default AuthView;

import React from "react";
import { useLocation } from "react-router-dom";
import { HomeComp } from "../components";

const MainView = () => {
  const Location = useLocation();
  switch (Location.pathname) {
    case "/":
      return <HomeComp />;
    default:
      return <HomeComp />;
  }
};

export default MainView;

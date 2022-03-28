import React from "react";
import { useLocation } from "react-router-dom";
import { HomeDashComp } from "../components";

const DashboardView = () => {
  const Location = useLocation();
  switch (Location.pathname) {
    case "/dashboard":
      return <HomeDashComp />;
    default:
      return <HomeDashComp />;
  }
};

export default DashboardView;

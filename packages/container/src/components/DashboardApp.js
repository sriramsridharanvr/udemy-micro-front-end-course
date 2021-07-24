import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

const DashboardApp = ({ onSignIn }) => {
  const ref = useRef(null);
  useEffect(() => {
    // Mount the app in the ref element
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;

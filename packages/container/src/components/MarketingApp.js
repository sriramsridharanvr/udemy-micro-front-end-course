import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    // Mount the Marketing app in the ref element
    mount(ref.current);
  });

  return <div ref={ref} />;
};

export default MarketingApp;

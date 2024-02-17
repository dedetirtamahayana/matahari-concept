import React from "react";
import { StickyNavbar } from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <StickyNavbar />
      {children}
    </>
  );
};

export default Layout;

import React, { lazy } from "react";
const Footer = lazy(() => import("../Footer/Footer"));
const Navbar = lazy(() => import("../Navbar/Navbar"));

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
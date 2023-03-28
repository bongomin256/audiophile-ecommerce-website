import React from "react";
import Footor from "../Footer/Footor";
import Nav from "../Nav/Nav";
// import Overlay from "../Overlay/Overlay";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Footor />
      {/* <Overlay /> */}
    </main>
  );
};

export default MainLayout;

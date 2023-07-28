import React from "react";
import Footor from "../Footer/Footor";
import Nav from "../Nav/Nav";
// import Overlay from "../Overlay/Overlay";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="mt-20">{children}</main>

      <Footor />
      {/* <Overlay /> */}
    </>
  );
};

export default MainLayout;

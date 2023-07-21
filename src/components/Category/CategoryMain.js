import React from "react";
import Footor from "../Footer/Footor";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import CategoryHome from "./CategoryHome";
import BestGear from "../BestGear/BestGear";

const CategoryMain = ({ children }) => {
  return (
    <>
      <Nav />
      <Hero />
      {children}
      <CategoryHome />
      <BestGear />
      <Footor />
    </>
  );
};

export default CategoryMain;

import React from "react";
import CategoryMain from "../components/Category/CategoryMain";
import Headphones from "./Headphones";
import { Route } from "react-router-dom";

const CategoryConstant = () => {
  return (
    <CategoryMain>
      <Route to="/headphones">
        <Headphones />
      </Route>
    </CategoryMain>
  );
};

export default CategoryConstant;

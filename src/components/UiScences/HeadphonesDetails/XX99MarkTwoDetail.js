import { useParams } from "react-router-dom";
import MainLayout from "../../Shared/Main/Main";

import React from "react";

const XX99MarkTwoDetail = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <h2>This is {id} detail page</h2>
    </MainLayout>
  );
};

export default XX99MarkTwoDetail;

import { useParams } from "react-router-dom";

const HeadphonesDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>This is {id} detail page</h2>
    </div>
  );
};

export default HeadphonesDetailPage;

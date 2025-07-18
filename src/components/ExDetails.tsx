import { FcLeft } from "react-icons/fc";
import { useLoaderData, useNavigate, useParams } from "react-router";

const ExDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  return (
    <>
      <div>
        <div className="flex items-center">
          <FcLeft
            className="w-5 h-5 mr-2 cursor-pointer"
            onClick={() => navigate("/exercise")}
          />
          {name}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ExDetails;

import { FcLeft } from "react-icons/fc";
import { useNavigate } from "react-router";

const NotFount = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-sreen h-screen flex justify-center items-center ">
        <div className="grid justify-center items-center">
          <div className="font-bold p-2">404 | Page Not Fount</div>

          <button
            className="btn btn-active btn-warning"
            onClick={() => navigate("/")}
          >
            <FcLeft className="w-5 h-5 mr-1" />
            Go To Login Page
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFount;

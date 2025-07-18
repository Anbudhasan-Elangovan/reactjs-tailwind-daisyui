import { FcUndo } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <label htmlFor="" className="text-white px-2">
        {user}
      </label>
      <FcUndo className="w-6 h-6 cursor-pointer" onClick={handleLogout} />
    </>
  );
};

export default Header;

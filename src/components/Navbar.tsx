import {
  FcHome,
  FcAbout,
  FcAddressBook,
  FcBriefcase,
  FcFactory,
  FcMultipleInputs,
} from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="grid">
        <NavLink
          to="home"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-l-2 border-black font-bold bg-slate-200 p-1 hover:bg-slate-100"
              : "flex items-center p-1 hover:bg-slate-100"
          }
        >
          <FcHome className="h-6 w-6 mr-4" />
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-l-2 border-black font-bold bg-slate-200 p-1 hover:bg-slate-100"
              : "flex items-center p-1 hover:bg-slate-100"
          }
        >
          <FcAbout className="h-6 w-6 mr-4" />
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-l-2 border-black font-bold bg-slate-200 p-1 hover:bg-slate-100"
              : "flex items-center p-1 hover:bg-slate-100"
          }
        >
          <FcAddressBook className="h-6 w-6 mr-4" />
          Contact
        </NavLink>
        <NavLink
          to="product"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-l-2 border-black font-bold bg-slate-200 p-1 hover:bg-slate-100"
              : "flex items-center p-1 hover:bg-slate-100"
          }
        >
          <FcFactory className="h-6 w-6 mr-4" />
          Product
        </NavLink>
        <NavLink
          to="jobs"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-l-2 border-black font-bold bg-slate-200 p-1 hover:bg-slate-100"
              : "flex items-center p-1 hover:bg-slate-100"
          }
        >
          <FcBriefcase className="h-6 w-6 mr-4" />
          Jobs
        </NavLink>
        <NavLink
          to="exercise"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-l-2 border-black font-bold bg-slate-200 p-1 hover:bg-slate-100"
              : "flex items-center p-1 hover:bg-slate-100"
          }
        >
          <FcMultipleInputs className="h-6 w-6 mr-4" />
          Exercise
        </NavLink>
      </ul>
    </>
  );
};

export default Navbar;

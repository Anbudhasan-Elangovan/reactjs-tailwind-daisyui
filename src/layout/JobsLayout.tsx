import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact";

const JobsLayout = () => {
  return (
    <>
      <div className="w-full h-full">
        <p className="font-bold">Job Openings</p>
        <Outlet />
      </div>
    </>
  );
};

export default JobsLayout;

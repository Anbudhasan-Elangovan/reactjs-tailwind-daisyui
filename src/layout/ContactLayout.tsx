import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact";

const ContactLayout = () => {
  return (
    <>
      <div className="w-full h-full">
        <Contact />
        <Outlet />
      </div>
    </>
  );
};

export default ContactLayout;

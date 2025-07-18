import { FcInfo, FcSalesPerformance } from "react-icons/fc";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>Contact</div>
        <button className="btn btn-info mr-2" onClick={() => navigate("info")}>
          <FcInfo className="w-5 h-5 mr-1" />
          Contact Info
        </button>
        <button className="btn btn-info" onClick={() => navigate("form")}>
          <FcSalesPerformance className="w-5 h-5 mr-1" />
          Contact Form
        </button>
      </div>
    </>
  );
};

export default Contact;

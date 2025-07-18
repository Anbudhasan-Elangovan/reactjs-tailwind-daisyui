import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const navigate = useNavigate();
  return (
    <>
      <p>An error occurred.</p>
      <p>{error.message}</p>
      <button
        className="btn btn-active btn-error"
        onClick={() => navigate("/jobs")}
      >
        Back to jobs
      </button>
    </>
  );
};

export default Error;

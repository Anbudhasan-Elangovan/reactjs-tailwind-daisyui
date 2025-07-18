import { FcLeft } from "react-icons/fc";
import { useLoaderData, useNavigate, useParams } from "react-router";

const JobDetails = () => {
  const navigate = useNavigate();
  const jobsDetails = useLoaderData();
  return (
    <>
      <p>Nmae: {jobsDetails.name}</p>
      <p>Email: {jobsDetails.email}</p>
      <p>Phone: {jobsDetails.phone}</p>
      <button className="btn btn-soft" onClick={() => navigate("/jobs")}>
        <FcLeft className="w-5 h-5 mr-1" />
        Back to Jobs
      </button>
    </>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw Error("Could not found job details");
  }
  return res.json();
};

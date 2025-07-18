import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <>
      <ul>
        {jobsData.map((job) => {
          return (
            <>
              <li key={job.id}>
                <Link to={job.id.toString()}>{job.name}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const jobRes = await fetch("https://jsonplaceholder.typicode.com/users");
  return jobRes.json();
};

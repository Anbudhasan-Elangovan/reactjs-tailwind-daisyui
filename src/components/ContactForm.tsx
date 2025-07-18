import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full mt-2 flex justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">Title</label>
          <input type="text" className="input" placeholder="My awesome page" />

          <label className="label">Slug</label>
          <input type="text" className="input" placeholder="my-awesome-page" />

          <label className="label">Author</label>
          <input type="text" className="input" placeholder="Name" />
          <button className="btn btn-neutral">Save</button>
        </fieldset>
      </div>
    </>
  );
};

export default ContactForm;

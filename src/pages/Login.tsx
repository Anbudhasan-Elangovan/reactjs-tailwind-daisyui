import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isRequire, setIsRequire] = useState(false);

  const handleChange = (e) => {
    setIsRequire(false);
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    if (!user.email || user.email === "") {
      setIsRequire(true);
    } else if (!user.password || user.password === "") {
      setIsRequire(true);
    } else {
      setIsRequire(false);
      localStorage.setItem("user", user?.email);
      navigate("home");
    }
  };
  return (
    <>
      <div className="w-screen h-screen grid justify-center items-center bg-slate-100">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>
          {isRequire && (
            <p className="text-xs text-red-500">
              Please fill the mandatory field.
            </p>
          )}

          <label className="label">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            minLength={1}
            maxLength={20}
            value={user.email}
            onChange={handleChange}
          />

          <label className="label">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            minLength={1}
            maxLength={20}
            value={user.password}
            onChange={handleChange}
          />

          <button className="btn btn-neutral mt-4" onClick={handleLogin}>
            Login
          </button>
        </fieldset>
      </div>
    </>
  );
};

export default Login;

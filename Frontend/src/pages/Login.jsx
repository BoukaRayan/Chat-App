import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(),
    login(user.username, user.password);
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-15 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              name="username"
              type="text"
              id="username"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={user.username}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={user.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <Link
              to="/signup"
              className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Don't have an account?
            </Link>
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

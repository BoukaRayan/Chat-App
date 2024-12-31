import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading, signup} = useSignUp();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-15">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              name="fullName"
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered  h-10"
              value={user.fullName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={user.username}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={user.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={user.confirmPassword}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="flex">
            <div className="form-control">
              <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Male</span>
                <input type="radio" className="radio" name="gender" value="male" onChange={(e)=>{handleChange(e);}} checked={user.gender === "male"} />
              </label>
            </div>
            <div className="form-control">
              <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Female</span>
                <input type="radio" className="radio" name="gender" value="female" onChange={(e)=>{handleChange(e);}} checked={user.gender === "female"}/>
              </label>
            </div>
          </div>

          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            to="/login"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/Payment/facebook_icon.svg";
import google from "../assets/Payment/google_icon.svg";
import { BiShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email address is invalid";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    }
    if (!formData.gender) {
      validationErrors.gender = "Gender is required";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);
      // proceed with form submission (e.g., API call)
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-8 py-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
        <h2 className="text-2xl font-bold text-center py-4">
          Welcome to Bengal Meat
        </h2>
        <h2 className="text-md text-center">Register Your Account</h2>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.name}
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              onChange={handleChange}
              value={formData.email}
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="number"
              onChange={handleChange}
              value={formData.phone}
              name="phone"
              placeholder="phone"
              className="input input-bordered"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={handleChange}
              value={formData.gender}
              name="gender"
            >
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              value={formData.password}
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            {showPassword ? (
              <BiShow
                className="absolute top-2/3 right-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-2/3 right-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Re-type Password</span>
            </label>
            <input
              type={confirm ? "text" : "password"}
              onChange={handleChange}
              value={formData.confirmPassword}
              name="confirmPassword"
              placeholder="confirm password"
              className="input input-bordered"
            />
            {confirm ? (
              <BiShow
                className="absolute top-[70%] right-12 cursor-pointer"
                onClick={() => setConfirm(!confirm)}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-[70%] right-12 cursor-pointer"
                onClick={() => setConfirm(!confirm)}
              />
            )}
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className=""
              onClick={() => setShow(!show)}
            />
            <label className="label">
              <span className="label-text">
                I agree to the terms and conditions
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-warning visible text-black"
              disabled={!show}
            >
              Register
            </button>
            <p className="text-center py-1">or continue with</p>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <div className="">
              <img
                src={facebook}
                alt="Facebook"
                className="mx-auto cursor-pointer"
              />
              <p>Facebook</p>
            </div>
            <div className="">
              <img
                src={google}
                alt="Google"
                className="mx-auto cursor-pointer"
              />
              <p>Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

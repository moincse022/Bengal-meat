import { Link } from "react-router-dom";
import facebook from "../assets/Payment/facebook_icon.svg";
// import google from "../assets/Payment/google_icon.svg";
import otp from "../assets/Payment/otp_icon.svg";
import { BiShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import GoogleLogin from "../SocialLogin/GoogleLogin";
// import useAuth from "../Hook/useAuth";
// import GoogleLogin from "../SocialLogin/GoogleLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const {user}=useAuth();
  // console.log(user)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);
      // proceed with form submission (e.g., API call)
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
        <h2 className="text-2xl font-bold text-center py-2">
          Welcome to Bengal Meat
        </h2>
        <h2 className="text-md text-center">Login with your credentials</h2>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email or Phone number</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              className="input input-bordered"
            />
            {error?.email && <p className="text-red-500">{error.email}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="input input-bordered relative"
            />
            {showPassword ? (
              <BiShow
                className="absolute top-1/2 right-12 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-1/2 right-12 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
            {error?.password && (
              <p className="text-red-500">{error.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-sm">
              New User?{" "}
              <Link to="/register">
                <span className="text-[#124693] hover:text-[#ffc107] cursor-pointer">
                  Register Here
                </span>
              </Link>
            </h2>
            <h2 className="text-sm text-[#124693] hover:text-[#ffc107] cursor-pointer">
              Forgot Password?
            </h2>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-warning">Login</button>
            <p className="text-center py-1">or login with</p>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <div>
              <img src={otp} alt="OTP" className="cursor-pointer" />
              <p>OTP</p>
            </div>
            <div>
              <img
                src={facebook}
                alt="Facebook"
                className="mx-auto cursor-pointer"
              />
              <p>Facebook</p>
            </div>
            {/* <div>
              <img
                src={google}
                alt="Google"
                className="mx-auto cursor-pointer"
              />
              <p>Google</p>
            </div> */}
            <GoogleLogin/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

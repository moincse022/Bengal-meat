import { Link } from 'react-router-dom';
import facebook from '../assets/Payment/facebook_icon.svg'
import google from '../assets/Payment/google_icon.svg'
import otp from '../assets/Payment/otp_icon.svg'
import { BiShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
const Login = () => {
const [showPassword, setShowPassword] = useState(false);
// const [valid, setValid] = useState(false);

  return (
        <div className="hero bg-base-200 min-h-screen">

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
            <h2 className="text-2xl font-bold text-center py-2">Welcome to Bengal Meat</h2>
            <h2 className="text-md text-center">Login with your credentials</h2>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email or Phone number</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
               
               </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered relative" required />
                {
                    showPassword?  <BiShow className='absolute top-1/2 right-12 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <FaEyeSlash className='absolute top-1/2 right-12 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> 
                }                
              </div>
              <div className="flex items-center justify-between">
                <h2 className=" text-sm ">New User? <Link to='/register'><span className='text-[#124693] hover:text-[#ffc107] cursor-pointer'>Register Here</span></Link></h2>
                <h2 className="text-sm text-[#124693] hover:text-[#ffc107] cursor-pointer">Forgot Password?</h2>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
                <p className="text-center py-1">or login with</p>
              </div>
              <div className="flex items-center gap-8 justify-center">
                   <div className="">
                    <img src={otp} alt="" className=" cursor-pointer" />
                    <p className="">OTP</p>
                   </div>
                   <div className="">
                    <img src={facebook} alt="" className="mx-auto cursor-pointer" />
                    <p className="">Facebook</p>
                   </div>
                   <div className="">
                    <img src={google} alt="" className="mx-auto cursor-pointer" />
                    <p className="">Google</p>
                   </div>
              </div>
            </form>
          </div>

      </div>

  );
};

export default Login;

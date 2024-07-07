import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/Payment/facebook_icon.svg'
import google from '../assets/Payment/google_icon.svg'
import { BiShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const [show, setShow] = useState(false);
   const[showPassword, setShowPassword] = useState(false);

    return (
        <div className="hero bg-base-200 min-h-screen mt-8 py-4">  
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
          <h2 className="text-2xl font-bold text-center py-4">Welcome to Bengal Meat</h2>
          <h2 className="text-md text-center">Register Your Account</h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input type="Number" placeholder="password" className="input input-bordered" required />
      
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
               <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Male</option>
                <option>Female</option>
               </select>

            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered " required />
                {
                    showPassword?  <BiShow className='absolute top-2/3 right-4 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <FaEyeSlash className='absolute top-2/3 right-4 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> 
                } 
            </div>
            <div className="form-control">
              <label className="label"> 
                <span className="label-text">Re-type Password</span>
              </label>

              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>

            <div className="flex items-center gap-4">
                <input type="checkbox" className="checkbox border-2 border-black" onClick={()=> setShow(!show)} />
                 <label className="label">
                     <span className="label-text">I agree to the terms and conditions</span>
                 </label>
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning visible text-black" disabled={!show}>Register</button>
              <p className="text-center py-1">or continue with</p>
            </div>
            <div className="flex items-center gap-8 justify-center">
          
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

export default Register;
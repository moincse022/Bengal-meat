import { IoLocationOutline } from "react-icons/io5";
import { BsFillCartDashFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import logo from '../../assets/Image/logo.png'
import { useState } from "react";
import './Navbar.css'
const Navbar = () => {
    const [menu,setMenu]=useState();
    return (
        <>
        <nav>
          <div className="flex justify-around items-center bg-slate-800 text-white p-4 h-[120px] -z-10">
             {/* logo */}
             <div className="mt-4">
                <img src={logo} alt="" className="w-[200px] h-[130px] " />
             </div>
             {/* input file */}
             <div className="relative">
                <input type="text" placeholder="Search" className=" border-2 border-slate-800 rounded-full p-2 w-[300px] h-[50px]" />
                 <div className="absolute top-[15px] right-[10px]">
                    <IoIosSearch  className="text-black w-6 h-6" />
                 </div>

             </div>
             {/* navLink */}
             <div className="flex items-center gap-4">
                  <div className="border flex items-center p-2 gap-4 bg-slate-800 text-white shadow-xl" onClick={()=>setMenu(menu)}><IoLocationOutline  className="w-4 h-4 text-amber-400"/> khulna</div>
                 <div className="bg-slate-800 text-white shadow-xl border p-3 ">   <BsFillCartDashFill className="w-4 h-4 text-amber-400"/> </div>
                  <div className="border flex items-center p-2 gap-4 bg-slate-800 text-white shadow-xl "><CiUser className="w-4 h-4 text-amber-400"/> SingUp</div>

             </div>
          </div>
        </nav>
      
        </>
    );
};

export default Navbar;
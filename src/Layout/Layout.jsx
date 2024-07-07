import React from 'react';
import Navbar from '../Compontens/Navbar/Navbar';
import Home from '../Compontens/Home/Home';
import Footer  from '../Compontens/Footer/Footer'
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div>
            <Navbar/>
           <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
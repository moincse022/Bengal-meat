import React, { useState } from 'react';
import useAuth from '../Hook/useAuth';
import google from "../assets/Payment/google_icon.svg";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import useAxiosPublic from '../Hook/useAxiosPublic';

const GoogleLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    // const axiosPublic = useAxiosPublic();

    const handleSocialLogin = async (media) => {
        setLoading(true);
        try {
            const result = await media();
            toast.success('User logged in successfully');
            
            // const userInfo = {
            //     email: result.user?.email,
            //     name: result.user?.displayName,
            //     image: result.user?.photoURL,
            // };

            // const response = await axiosPublic.post('/users', userInfo);
            console.log(result.data);
            navigate('/');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div onClick={() => handleSocialLogin(googleLogin)}>
            <img
                src={google}
                alt="Google"
                className="mx-auto cursor-pointer"
            />
            <p>Google</p>
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default GoogleLogin;

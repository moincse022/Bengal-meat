import React, { useState } from 'react';
import useAuth from '../Hook/useAuth';
import google from "../assets/Payment/google_icon.svg";
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleGoogle = async () => {
        if (loading) return; // Prevent multiple pop-up requests

        setLoading(true);
        try {
            const res = await googleLogin();
            // console.log("Google Login Success");
            console.log(res.data);
            navigate('/');
        } catch (error) {
            console.log("Google Login Error", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div onClick={handleGoogle}>
            <img
                src={google}
                alt="Google"
                className="mx-auto cursor-pointer"
            />
            <p>Google</p>
        </div>
    );
};

export default GoogleLogin;

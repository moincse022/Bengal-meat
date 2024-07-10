import React, { createContext, useState } from 'react';
// import { auth } from '../Firebase/Firebase-config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/Firebase-config';
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const [Loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const googleProvider = new GoogleAuthProvider();
    
    //google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
  


const authentication={
   googleLogin ,
   Loading,
}


    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
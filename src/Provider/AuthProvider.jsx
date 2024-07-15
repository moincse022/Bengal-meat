import React, { createContext, useEffect, useState } from 'react';
// import { auth } from '../Firebase/Firebase-config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
 
        // create user 
        const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
        }
    // signin user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
//    using observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        });
    }, [])

    // to sign out user
    const logOut = () => {
        return signOut(auth)
    }


const authentication={
   googleLogin,
   Loading,
   signIn,
   user,
   createUser,
   handleUpdateProfile,
   logOut,
   
}


    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
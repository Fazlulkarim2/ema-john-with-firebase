import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import initializeAuthenticaion from "../Firebase/firebase.init";
import { useEffect } from "react";
initializeAuthenticaion();
const useFirebase =()=>{
    const [user,setUser] =useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle =()=>{
      return  signInWithPopup(auth,googleProvider)
        
    }
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    // ovserve whether user auth  state changed or  not 
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
        });
        return unsubscribe;
    },[])
    return{
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;
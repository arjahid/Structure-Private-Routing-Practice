
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext=createContext();

const ContexApi = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
    
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
   
    useEffect(()=>{
      const unscribe=  onAuthStateChanged(auth,(user)=>{
        setUser(user)
        setLoading(false)
            
        })
        return ()=>{
            unscribe()
        }
    },[])


    const authInfo={
        name:'baby jahid',
        signUp,
        signIn,
        user,
        loading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContexApi;
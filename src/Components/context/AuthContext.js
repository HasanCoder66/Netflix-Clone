import { useContext, useEffect, useState, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user , setUser ] = useState({});

    const signup = (email , password) => {
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const login = (email , password) => {
        return signInWithEmailAndPassword(auth, email , password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser => {
            setUser(currentUser);
        })) ;
        return () => {
            unSubscribe()
        };
    });

  return <AuthContext.Provider value={{signup , login , logout , user}}>
    {children}
    </AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

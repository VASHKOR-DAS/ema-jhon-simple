import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState();

    // SignUp
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // logIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut
    const logOut = () => {
        return signOut(auth);
    }

    // currenly logIn user observer (user login ase kina check kore)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('current user state change', currenUser);
            setUser(currentUser);
        });

        return () => unSubscribe();

    }, []);
    // currenly logIn user observer

    const authInfo = { user, createUser, signIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
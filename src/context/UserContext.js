import React, { createContext, useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [me, setMe] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("/assets/user/user.json");
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const register = (userData) => {
        const newUser = {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image:"",
            role:"user"
        }
        setUser((prevUser) => [...prevUser, newUser]);
    }
    const login =  (userData) => {
        const User = user.find((u) => u.email === userData.email && u.password === userData.password);
        setMe(User);
        if(User) {
            setIsLoggedIn(true);
        } else {
            alert("Invalid Credentials");
        }       
    };

    const logout = async () => {
       setIsLoggedIn(false);
       return <Navigate to="/"/>
    };

    const isAdmin = () => {
        return user?.role === "admin";
    };

    return (
        <UserContext.Provider value={{me, isLoggedIn ,register, login, logout, isAdmin }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
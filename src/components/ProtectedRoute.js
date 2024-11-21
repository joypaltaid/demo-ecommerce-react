import React from 'react';
import { Route, Navigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

const ProtectedRoute = ({element, adminOnly, ...rest}) => {
    const { user, isAdmin } = useUser();

    if(!user) {
        return <Navigate to="/login"/>;
    }

    if(adminOnly && !isAdmin()) {
        return <Navigate to="/"/>;
    }

    return <Route {...rest} element={element}/>;
};

export default ProtectedRoute;
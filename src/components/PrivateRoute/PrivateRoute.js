import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    if(loading){
      return <h1>Loading</h1>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
};

export default PrivateRoute;
import React from 'react';
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = useSelector((state) => state.auth.token);
    return auth ? <Outlet />: <Navigate to="/home" />;
}

export default PrivateRoute;
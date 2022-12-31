import React from 'react';
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const isAdmin = useSelector((state) => state.auth.user.Message[0].is_admin);
    return isAdmin ? <Outlet />: <Navigate to="/news" />;
}

export default AdminRoute;
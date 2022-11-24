import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    if (loading) {
        return <div className='d-flex justify-content-center align-items-center mt-5 pt-5'><Spinner className='mt-5' animation="border" variant="primary" /></div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivateRoute;

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import Loader from '../Components/Loader';

const Privaterout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loader />
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }
    } replace />;
};

export default Privaterout;
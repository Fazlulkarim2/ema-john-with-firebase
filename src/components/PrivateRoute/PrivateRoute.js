import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import OrderReview from '../OrderReview/OrderReview';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();
    return (
        <div>
            {
                user.email?
                children:<Navigate to = "/login" 
                state = {{from:location}}
                replace/>

               
            }
        </div>
    );
};

export default PrivateRoute;
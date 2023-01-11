import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    // user er moddhe email && uid thakle private route a access korte dibo
    const navigate = useNavigate();

    return (
        <div>
            {user?.email && user?.uid
                ?
                children
                :
                navigate('/login')
            }
        </div>
    );
};

export default PrivateRoute;
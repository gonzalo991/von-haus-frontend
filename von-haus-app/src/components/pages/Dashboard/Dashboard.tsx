import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token)
            navigate("/");
    }, []);

    return (
        <>
            <h1>Bienvenido admin</h1>
        </>
    );
}

export default Dashboard;
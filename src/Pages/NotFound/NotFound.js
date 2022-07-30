import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
    return (
        <div className="hero min-h-screen bg-yellow-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="py-6">This page not found please go to home</p>
                    <button className="btn btn-primary" onClick={handleHome}>Go Home</button>
                </div>
            </div>

        </div>
    );
};

export default NotFound;
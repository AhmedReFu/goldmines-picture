import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const openHome = () => {
        navigate('/')
    }
    return (
        <footer className="footer footer-center p-4 bg-yellow-500 text-base-content">
            <div>
                <p className='text-xl'>Copyright © 2022 - All right reserved by <span className='titel-hover' onClick={openHome}> Goldmines Picture</span></p>
            </div>
        </footer >
    );
};

export default Footer;
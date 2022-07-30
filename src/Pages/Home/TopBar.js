import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo.webp';
import './Popular.css'

const TopBar = () => {
    const navigate = useNavigate();
    const openHome = () => {
        navigate('/')
    }
    return (
        <div className='md:flex'>
            <div className='mr-20 md:my-4'>
                <img onClick={openHome} href src={logo} alt="" />
            </div>
            <div className='text-yellow-400 md:my-10'>
                <h1 onClick={openHome} className='text-5xl'>Goldmines Picture</h1>
                <p className='text-xl '>Download Free All Movie Full HD <span className='titel-hover' onClick={openHome}>Goldmines Picture</span></p>
            </div>

        </div>
    );
};

export default TopBar;
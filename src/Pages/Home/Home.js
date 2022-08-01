import React from 'react';
import { Helmet } from 'react-helmet-async';
import CategoryMovie from '../CategoryMovie/CategoryMovie';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Popular from './Popular';

const Home = () => {
    return (

        <div>
            <Helmet>
                <title>Goldmines Picture</title>
            </Helmet>
            <CategoryMovie></CategoryMovie>
            <Popular></Popular>
            <Movies></Movies>
            <Footer></Footer>
        </div >
    );
};

export default Home;
import React from 'react';
import CategoryMovie from '../CategoryMovie/CategoryMovie';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Popular from './Popular';

const Home = () => {
    return (

        <div>
            <CategoryMovie></CategoryMovie>
            <Popular></Popular>
            <Movies></Movies>
            <Footer></Footer>
        </div >
    );
};

export default Home;
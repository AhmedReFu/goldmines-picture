import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../Movies/Movie';
import './Popular.css';
import PopularMovie from './PopularMovie';

const Popular = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://shielded-beach-52215.herokuapp.com/movies');
            setMovies(res.data);
            setLoading(false);
        };
        fetchPosts()
    }, []);
    const revItems = [...movies,];
    const newItems = revItems.slice(0, 6);
    return (
        <div className='mt-10'>
            <div className='bg-yellow-400 top-plate'>
                <h1 className='text-black text-3xl transition duration-0 hover:duration-150 pl-2 title-hover'>Popular Movies</h1>
            </div>
            <div className='popular-section p-4 justify-items-center grid xl:grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6'>
                {newItems.map(movie => <Movie key={movie.id} loading={loading} movie={movie}></Movie>)}
            </div>
        </div>
    );
};

export default Popular;
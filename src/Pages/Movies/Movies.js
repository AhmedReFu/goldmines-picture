import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import './Movies.css'
import axios from 'axios';
import Pagination from './Pagination';
import Loading from '../Loading/Loading';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://shielded-beach-52215.herokuapp.com/movies');
            setMovies(res.data);
            setLoading(false);
        };
        fetchPosts()
    }, []);
    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);
    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className='my-10 '>
            <div className='bg-yellow-400 top-plate-movies'>
                <h1 className='text-black text-3xl transition duration-0 hover:duration-150 pl-2 title-hover'>Latest Movies</h1>
            </div>
            <div className='popular-section p-4 justify-items-center grid xl:grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6'>
                {!movies ? <Loading></Loading> :
                    currentPosts.map(movie => <Movie key={movie._id} loading={loading} movie={movie}></Movie>)

                }
            </div>
            <div className='flex justify-center my-4'>
                <Pagination postsPerPage={postsPerPage} totalPosts={movies.length} paginate={paginate}></Pagination></div>
        </div>
    );
};

export default Movies;
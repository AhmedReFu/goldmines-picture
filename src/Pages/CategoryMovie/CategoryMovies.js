import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Movie from '../Movies/Movie';
import Pagination from '../Movies/Pagination';

const CategoryMovies = () => {
    const [movies, setMovies] = useState([]);
    const category = useParams()
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`https://movies.goldminespicture.xyz/movies/category/${category.category}`);
            setMovies(res.data);
            setLoading(false);

        };

        fetchPosts()
    }, [category.category]);

    const gold = ['Hindi', 'Hindi Dubbed', 'Kannada', 'Tamil', 'Telugu', 'English', 'Malayalam'];



    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    if (!gold.includes(category.category)) {
        return navigate('/')
    }
    const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div className='my-10 '>
            <Helmet>
                <title>{category.category} - Goldmines Picture</title>
            </Helmet>
            <div className='bg-yellow-400 w-fit	'>
                <h1 className='text-black text-3xl transition duration-0 hover:duration-150 pl-2 title-hover mr-2'>{category.category} Movies</h1>
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

export default CategoryMovies;
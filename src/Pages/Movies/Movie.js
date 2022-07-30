/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Movie = ({ movie, loading }) => {
    const { author, date, Genres, name, views, thumbnail, _id } = movie;
    if (loading) {
        return <Loading></Loading>
    }
    const navigate = useNavigate();
    const movieView = id => {
        navigate(`/${id}`);
    };
    return (
        <div onClick={() => movieView(_id)} className="card w-96 shadow-xl hover:font-semiBold"
        >

            <figure>
                <img className='h-96 w-screen' src={thumbnail} alt={name} />
            </figure>
            <div className="p-3 bg-slate-800 backdrop-blur-lg text-white">
                <h2 className="card-title inline">
                    {Genres.map(Genre => <div className="badge badge-secondary m-1">{Genre}</div>)}
                </h2>
                <p className='text-xl'>{name}</p>
                <h2 className='flex justify-between text-xl font-sans '><span>{date}</span><span>{views}</span><span>{author}</span></h2>

            </div>
        </div >
    );
};

export default Movie;
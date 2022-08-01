import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PopularMovie = ({ movie, loading }) => {
    const navigate = useNavigate();
    if (loading) {
        return <Loading></Loading>
    }
    const { name, Genres, date, author, thumbnail, _id } = movie;
    const movieView = name => {
        navigate(`/movie/${name}`);
    };
    return (

        <div onClick={() => movieView(_id)} className="card w-96 bg-base-100 shadow-xl hover:font-semiBold">
            <figure><img className='h-60 w-screen' src={thumbnail} alt="Shoes" /></figure>
            <div className="card-body bg-slate-800 backdrop-blur-lg text-white">
                <h2 className="card-title inline">
                    {Genres.map(tags => <div className="badge badge-secondary m-1">{tags}</div>)}

                </h2>
                <p className='text-xl'>{name}</p>
                <h2 className='flex justify-between text-xl font-sans '><span>{date}</span><span>{author}</span></h2>
            </div>
        </div>

    );
};

export default PopularMovie;
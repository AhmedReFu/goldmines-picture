import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const InfoMovie = () => {
    const { name } = useParams();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`https://movies.goldminespicture.xyz/movies/${name}`);

            setMovies(res.data);
            setLoading(false);
        };
        fetchPosts()
    }, [name]);
    if (name === "undefined") {
        return navigate('/')
    }
    const { thumbnail, descript, ScreenShot, Genres, Plot, Date, Cast, Language, Length, Size, Quality } = movies;
    let load
    if (loading) {
        load = <Loading></Loading>;
        return load
    }
    return (
        <div className='popular-section my-10'>
            <Helmet>
                <title>{movies.name}</title>
            </Helmet>
            {load}
            <div className="hero min-h-screen bg-yellow-200" style={{ "background-image": `url()` }}>
                <div className="hero-overlay bg-opacity-60 bg-yellow-200"></div>
                <div className="hero-content ">
                    <div className="max-w-7xl ">
                        <div className='flex justify-center'>
                            <img src={thumbnail} className="rounded-lg shadow-2xl" alt='{}' />
                        </div>
                        <h1 className="mb-5 text-5xl font-bold">{movies.name}</h1>
                        <p className="mb-5">{descript}</p>
                        <h3 className="mb-5 text-xl font-bold">Plot</h3>
                        <p className="mb-5">{Plot}</p>
                        <h3 className="mb-5 text-xl font-bold text-center rounded">Screen Shot</h3>
                        <img className='mx-auto mb-5' src={ScreenShot} alt="" />
                        <p>
                            Full Name: {movies.name}<br></br>
                            Release Date: {Date} (India)<br></br>
                            Length: {Length}<br></br>
                            Size: {Size}<br></br>
                            Quality: {Quality}<br></br>
                            Genres: {Genres}<br></br>
                            Language: {Language}<br></br>
                            Cast: {Cast}<br></br>
                        </p><br></br>
                        <div className='flex justify-center'>
                            <button className="btn btn-primary">Download</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoMovie;
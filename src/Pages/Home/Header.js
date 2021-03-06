import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/logo.webp'
import Loading from '../Loading/Loading';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/category/Tamil'>Tamil</Link></li>
        <li><Link to='/category/Telugu'>Telugu</Link></li>
        <li><Link to='/category/Malayalam'>Malayalam</Link></li>
        <li><Link to='/category/Hindi'>Hindi</Link></li>
        <li><Link to='/category/Kannada'>Kannada</Link></li>
        <li><Link to='/category/English'>English</Link></li>
        <li><Link to='/category/Hindi Dubbed'>Hindi Dubbed</Link></li>
        {user ?
            <>
                <button onClick={logout} className='btn btn-ghost'><Link to=''>Sign Out</Link></button>
            </>
            :
            <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }
    </>
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const movieView = id => {
        if (id === "undefined") {
            navigate(`/`);
        } else {
            navigate(`/movie/${id}`);
        }
    };

    const searchText = useRef('');
    const searchBox = (text) => {
        let name = searchText.current.value;
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`https://movies.goldminespicture.xyz/search?search=${name}`);
            setMovies(res.data);
            setLoading(false);
        };
        fetchPosts()
    }
    return (
        <div className="navbar bg-yellow-500 rounded">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-400 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <input tabIndex='0' autocomplete="off" onChange={searchBox} ref={searchText} type="text" name='search' placeholder="Search Movie Name" className="input w-72 input-bordered" />
                    <ul tabIndex='0' class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72 h-52 overflow-auto touch-auto ">
                        {movies.map(movie =>
                            <li onClick={() => movieView(movie._id)}>
                                <div className="avatar">
                                    <div class="w-30 rounded-xl">
                                        <img src={movie.thumbnail} alt={movie.name} />
                                    </div>
                                    <p>{movie.name}</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Header;
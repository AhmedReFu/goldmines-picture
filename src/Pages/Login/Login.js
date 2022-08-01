import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';
import google from '../../img/google.png'

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const location = useLocation();
    const signInGoogle = () => {
        signInWithGoogle();

    }
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast('user login success')
        }
    }, [from, token, navigate])
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (gError || error) {
        toast(gError?.message || error?.message)
    }

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);

    };

    return (
        <div className='my-2 bg-yellow-200'>
            <div className='flex h-screen justify-center items-center my-4'>
                <div className="card w-96 bg-yellow-400 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-5xl text-center font-bold'>Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            <span className='label-text-alt text-sm'><Link to='/forget'>Forget Password?</Link></span>
                            <input className='btn w-full max-w-xs my-4 text-white' type="submit" value='Login' />
                        </form>
                        <p>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create New Account</Link></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={signInGoogle}
                            className="btn bg-white btn-outline"
                        > <img className='w-8 mr-3' src={google} alt="" />Continue With Google</button>
                    </div>
                </div>
            </div >
            <ToastContainer />
        </div>
    );
};

export default Login;
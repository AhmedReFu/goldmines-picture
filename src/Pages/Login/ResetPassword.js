import React, { useState } from 'react';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);


    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    console.log(email)
    const resetpassword = async () => {
        await sendPasswordResetEmail(email);

    }
    if (sending) {
        return toast('Check Your Email Reset Link')
    }
    if (error) {
        toast(error.message)
    }
    return (
        <div className='bg-yellow-200 my-2'>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-yellow-400 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Reset Password</h2>
                        <div className="form-control my-12">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" placeholder="your email" value={user?.email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full max-w-xs" />
                                <button className='btn' onClick={resetpassword}>SEND</button>

                            </label>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResetPassword;
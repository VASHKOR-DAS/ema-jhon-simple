import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-[93.5vh] bg-base-200">

            <div className="hero hero-content flex-col">

                <h1 className="text-4xl font-bold">Sign Up</h1>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                    
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />

                            <label className="text-center">
                                <span className='label-text-alt mr-2'>Already have an account?</span>

                                <span className="link-hover text-xs text-warning">
                                    <Link to={'/login'}>Login</Link>
                                </span>
                            </label>
                        </div>

                        <div className="divider px-4">or</div>

                        <div className="form-control">
                            <button className="capitalize btn btn-warning text-lg">Sign Up</button>
                        </div>
                    </form>

                    <button className="capitalize text-base btn btn-success btn-outline mx-8 mb-7">Continew with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
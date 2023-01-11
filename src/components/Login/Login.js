import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // logIn
        signIn(email, password)
            .then(result => {
                const user = result.user
                form.reset();
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.error('error', error);
            })
    }


    return (
        <div className="hero min-h-[93.5vh] bg-base-200">
            <div className="hero hero-content flex-col">
                <h1 className="text-4xl font-bold">Login</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    {/* ----------------------Form Start-------------- */}

                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                            <label className="text-center">
                                <span className='label-text-alt mr-2'>New to Ema-John?</span>

                                <span className="link-hover text-xs text-success">
                                    <Link to={'/signup'}>Create new account</Link>
                                </span>
                            </label>
                        </div>

                        <div className="divider px-4">or</div>

                        <div className="form-control">
                            <button className="capitalize btn btn-primary text-lg">Login</button>
                        </div>
                    </form>

                    {/* ----------------------Form End---------------- */}

                    <button className="capitalize text-base btn btn-success btn-outline mx-8 mb-7">Continew with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { AuthContext } from '../../ContexApi';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate=useNavigate()

    const {signIn,user}=useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate('/')

        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignIn now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='pl-3 pb-2'>New User?Please <Link className='text-green-600' to='/signup'>SignUP</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default SignIn;
import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
     const { register, handleSubmit } = useForm();
     const { SignUpUser, error, googleLogin } = useAuth();
     const navigate = useNavigate();
     const location = useLocation();
     let redirectUrl ="/";
  if(location?.state){
    let {from} = location?.state;
    redirectUrl =  from?.pathname || "/";
  }
     const onSubmit = (data) => {
       SignUpUser(data.email,data.password,navigate,redirectUrl);
     };
    return (
      <div className="container mx-auto my-5 ">
        <div className="card p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                {...register("email")}
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                {...register("password")}
                minLength={6}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary my-2" type="submit">
              Sign Up
            </button>
            <div>
              <button
                className="btn btn-secondary my-2"
                onClick={() => googleLogin(navigate,redirectUrl)}
              >
                Login With Google
              </button>
            </div>
            {error && (
              <>
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    );
};

export default Register;
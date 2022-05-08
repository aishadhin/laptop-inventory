import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const { LoginUser, googleLogin, error } = useAuth();
  const { register, handleSubmit } = useForm();
  const Navigate = useNavigate();
  const onSubmit = (data) => {
    const { email, password } = data;
    LoginUser(email, password, Navigate, "/");
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
            Login
          </button>
          <div>
            <button
              className="btn btn-secondary my-2"
              onClick={() => googleLogin(Navigate, "/")}
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

export default Login;

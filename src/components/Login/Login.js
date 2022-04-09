import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleUserSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/shop");
  }

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Log In</h1>
        <form onSubmit={handleUserSignIn} className="input-group">
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailBlur} required type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input
            onBlur={handlePasswordBlur}
            required
            type="password"
            name="password"
          />
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john?
          <Link className="form-link" to="/signup">
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

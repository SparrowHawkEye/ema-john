import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, , hookError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if (user) {
      navigate("/shop");
    }
  });

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password Must be 6 Characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Sign Up</h1>
        <form className="input-group" onSubmit={handleCreateUser}>
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailBlur} required type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input
            onBlur={handlePasswordBlur}
            required
            type="password"
            name="password"
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            onBlur={handleConfirmPasswordBlur}
            required
            type="password"
            name="Confirm Password"
          />
          <p style={{ color: "red" }}>{error || hookError}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already Have an account?
          <Link className="form-link" to="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

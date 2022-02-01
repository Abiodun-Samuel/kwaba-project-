import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   "https://localhost:5000/api/login",
      //   // "https://kwaba-project.herokuapp.com/api/login",
      //   { email, password }
      // );
      const response = await fetch(
        "https://kwaba-project.herokuapp.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      // console.log(data);
      if (data.user) {
        localStorage.setItem("token", data.user);
        var token = localStorage.getItem("token", data.user);
        dispatch({ type: "LOGIN", payload: token });
        navigate("/dashboard");
      } else {
        toast.error(data.error);
        // console.log(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div>
        <ToastContainer />
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-md-8 mt-4">
          <div className="form shadow bg-white p-3">
            <div className="form-header">
              <h4>Login</h4>
            </div>
            <form onSubmit={loginUser}>
              <div className="form-group my-3">
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group my-3">
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <p>
                  <Link to="/register">Register</Link>
                </p>
              </div>
              <div className="form-group my-3">
                <button type="submit" className="form-control">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

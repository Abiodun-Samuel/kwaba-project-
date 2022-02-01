import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ name, email, password }),
      });
      // const response = await axios.post(
      //   "https://kwaba-project.herokuapp.com/api/register",
      //   { name, email, password }
      // );
      const data = await response.json();
      if (data.status === "ok") {
        navigate("/login");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
    // const data = await response.json();
    // if (data.status === "ok") {
    //   navigate("/login");
    // } else {
    //   toast.error(data.error);
    // }
  };
  return (
    <div className="container">
      <div>
        <ToastContainer />
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <div className="form bg-white p-3 shadow mt-4">
            <form onSubmit={registerUser} autoComplete="off">
              <div className="form-header">
                <h4>Register</h4>
              </div>
              <div className="form-group my-3">
                <input
                  type="text"
                  value={name}
                  className="form-control"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                  Already registered? <Link to="/login">Login</Link>
                </p>
              </div>
              <div className="form-group my-3">
                <button>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  var token = localStorage.getItem("token");

  return (
    <section className="home">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-6 p-5">
            <h1>Home financing made easy</h1>
            <p>
              Use Kwaba to save, get instant loans and pay for your home in
              convenient installments. As a renter or an aspiring homeowner,
              Kwaba helps you make flexible payments for any property.
            </p>
            <div className="mt-5">
              {token ? (
                <Link className="home-register" to="/dashboard">
                  Get Started
                </Link>
              ) : (
                <Link className="home-register" to="/register">
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

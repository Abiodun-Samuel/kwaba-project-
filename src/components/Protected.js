import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import jose from "node-jose";

const Protected = () => {
  var token = localStorage.getItem("token");
  //   token = jose.util.base64url.decode(token);
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;

import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      Error 404!!!
      <p>Page not found</p>
      <Link to={"/"}>Use this to go back to the homepage</Link>
    </div>
  );
};

export default ErrorPage;

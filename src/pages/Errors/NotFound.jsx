import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="min-vh-100 w-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h3 className="mb-3">404 Page Not Found</h3>
        <p className="fs-4">The page you are looking for could not be found.</p>
        <Link to="/" className="btn btn-primary btn-sm">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

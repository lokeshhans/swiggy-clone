import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-xl font-bold text-black">We'll be back shortly</h1>
      <p className="text-sm font-light text-gray-500">
        We are fixing a temporary glitch. Sorry for the inconvenience.
      </p>
      <button className="btn btn-warning px-4">
        <Link to={"/"}>Go Back</Link>
      </button>
    </div>
  );
};

export default NotFound;

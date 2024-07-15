import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-9xl font-bold text-red-600">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a 
        href="/" 
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg text-lg transition duration-300 ease-in-out hover:bg-red-700"
      >
        Go back to Home
      </a>
    </div>
  );
};

export default ErrorPage;

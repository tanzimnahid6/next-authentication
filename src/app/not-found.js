// NotFound.jsx

import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
        <p className="text-gray-600">
          The page you are looking for might be in another castle. Please check the URL and try again.
        </p>
        <Link href={'/'}><span className='font-bold border-2 border-blue-700 p-1 rounded-lg mt-2'>Home</span></Link>
      </div>
    </div>
  );
};

export default NotFound;

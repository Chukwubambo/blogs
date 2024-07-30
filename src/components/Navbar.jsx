// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link to="/create" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Create
          </Link>
          <Link to="/update/:id" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Update
          </Link>
          <Link to="/blogs/:id" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



 
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sub = () => {
  return (
    <div className="bg-blue-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-24 text-center">
        <h1 className="text-5xl font-bold mb-4 ">Explore Categories</h1>
        <p className="text-lg text-gray-400 mb-8">
          Discover our diverse categories to enhance your learning and explore various domains of development.
        </p>
      </section>

      {/* Explore Categories Section */}
      <section className="py-16 px-6 md:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Inte Category */}
          <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl p-6 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Subject</h3>
            <p className="text-gray-300 mb-4">
              Dive into Inte concepts, covering the basics and advanced techniques. Get access to extensive resources.
            </p>
            <NavLink to='SubCol' className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 w-full">
              
              Explore Inte
            </NavLink>
          </div>

          {/* View Category */}
          <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl p-6 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Interview</h3>
            <p className="text-gray-300 mb-4">
              Learn about the View in programming, explore different view models, UI components, and interaction techniques.
            </p>
            <NavLink to='InterQues' className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 w-full">
              Explore View
            </NavLink>
          </div>

          {/* Data Category */}
          <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl p-6 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">DSA</h3>
            <p className="text-gray-300 mb-4">
              Deep dive into data structures, algorithms, and optimization techniques. Solve real-world problems.
            </p>
            <NavLink to='DsaQues' className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 w-full">
              Explore Data
            </NavLink>
          </div>
        </div>
      </section>
      <Outlet/>
    </div>
  );
};

export default Sub;

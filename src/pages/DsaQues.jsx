import React from 'react';

const DsaTrackerUI = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-24 text-center">
        <h1 className="text-5xl font-bold mb-4 text-indigo-400">Welcome to DSA Tracker</h1>
        <p className="text-lg text-gray-400 mb-8">
          Track and solve Data Structures & Algorithms problems. Improve your skills with our curated questions and solutions.
        </p>
        <button className="bg-indigo-500 px-8 py-3 rounded-lg text-white hover:bg-indigo-600 transition duration-300">
          Start Solving Now
        </button>
      </section>

      {/* DSA Sections */}
      <section className="py-16 px-6 md:px-24">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-12">Explore Categories</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Arrays Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl p-6 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Arrays</h3>
            <p className="text-gray-300 mb-4">
              Dive deep into arrays with problems ranging from basic to advanced. Enhance your skills and solve challenges efficiently.
            </p>
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 w-full">
              Explore Arrays
            </button>
          </div>

          {/* Linked List Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl p-6 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Linked List</h3>
            <p className="text-gray-300 mb-4">
              Master linked list operations with our comprehensive collection of problems and solutions, designed for all levels.
            </p>
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 w-full">
              Explore Linked Lists
            </button>
          </div>

          {/* Trees Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl p-6 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">Trees</h3>
            <p className="text-gray-300 mb-4">
              Understand and solve problems related to binary trees, binary search trees, and more with step-by-step solutions.
            </p>
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 w-full">
              Explore Trees
            </button>
          </div>
        </div>
      </section>

       
    </div>
  );
};

export default DsaTrackerUI;

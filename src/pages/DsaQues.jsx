import React from 'react';
import { useState } from 'react';
 
const cardsData = [
  {
    title: 'Array and String',
    description:
      'Master array and string problems from basics to advanced levels with structured patternsand two-pointer techniques.',
    link: 'https://dsa-tracker-kappa.vercel.app/Array%20and%20String',
  },
  {
    title: 'Binary Trees',
    description:
      'Dive into binary trees, traversal techniques, and key operations like insertion, deletion, and balancing.',
    link: 'https://dsa-tracker-kappa.vercel.app/Binary%20Tree',
  },
  {
    title: 'Linked List',
    description:
      ' Learn  and  practice  singly , doubly , and circular linked lists including reversal , cycle detection , and merging .',
    link: 'https://dsa-tracker-kappa.vercel.app/Linked%20List',
  },
  {
    title: 'Graphs',
    description:
      'Explore graph concepts including DFS, BFS, shortest paths (Dijkstra, Bellman-Ford), and spanning trees (Prim’s, Kruskal’s).',
    link: 'https://dsa-tracker-kappa.vercel.app/Graphs',
  },
  {
    title: 'Dynamic Programming',
    description:
      'Solve classic DP problems using memoization, tabulation, and pattern-based optimization techniques.',
    link: 'https://dsa-tracker-kappa.vercel.app/Dp',
  },
  {
    title: 'Greedy',
    description:
      'Tackle interval scheduling, coin change, and optimization problems using greedy strategies and proofs of correctness.',
    link: 'https://dsa-tracker-kappa.vercel.app/Greedy',
  },
  {
    title: 'Heaps',
    description:
      'Understand heaps and priority queues to solve top-K, median, and scheduling problems efficiently.',
    link: 'https://dsa-tracker-kappa.vercel.app/Heaps',
  },
  {
    title: 'Recursion',
    description:
      'Master recursion fundamentals, including backtracking, divide and conquer, and recursive tree visualization.',
    link: 'https://dsa-tracker-kappa.vercel.app/Recursion',
  },
  {
    title: 'Binary Search Tree',
    description:
      'Learn BST properties, insertion, deletion, balancing, and in-order successor/predecessor logic.',
    link: 'https://dsa-tracker-kappa.vercel.app/Binary%20Search%20Tree',
  },
  {
    title: 'Stack and Queue',
    description:
      'Implement and apply stacks and queues in real-world scenarios like expression evaluation and sliding windows.',
    link: 'https://dsa-tracker-kappa.vercel.app/Stack%20and%20Queue',
  },
  {
    title: 'Backtracking',
    description:
      'Solve constraint satisfaction problems like N-Queens, Sudoku, and permutations using backtracking algorithms.',
    link: 'https://dsa-tracker-kappa.vercel.app/Backtracking',
  },
];


const DsaTrackerUI = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? cardsData : cardsData.slice(0, 3);

  return (
    <div className="bg-blue-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-24 text-center">
        <h1 className="text-5xl font-bold mb-4 text-indigo-400">Welcome to DSA Tracker</h1>
        <p className="text-lg text-gray-400 mb-8">
          Track and solve Data Structures & Algorithms problems. Improve your skills with our curated questions and solutions.
        </p>
        {/*<button className="bg-indigo-500 px-8 py-3 rounded-lg text-white hover:bg-indigo-600 transition duration-300">
          Start Solving Now
        </button>*/}
        
        <a href="https://dsa-tracker-kappa.vercel.app/" class="bg-indigo-500 px-8 py-3 rounded-lg text-white hover:bg-indigo-600 transition duration-300">Start Solving Now</a>

      </section>

      {/* DSA Sections */}
      <section className="py-16 px-6 md:px-24">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-12">Explore Categories</h2>
          
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl p-6 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">{card.title}</h3>
            <p className="text-gray-300 mb-4">{card.description}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-indigo-500 text-white px-6 py-3 rounded-lg text-center hover:bg-indigo-600 transition duration-300 w-full"
            >
              Explore {card.title}
            </a>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
        
      </section>

       
    </div>
  );
};

export default DsaTrackerUI;

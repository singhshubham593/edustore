import React, { useState } from 'react';

const PreviousYearPapersSubjectWise = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample subjects
  const subjects = [
    'Mathematics',
    'DBMS',
    'operatingsystem',
    'Biology',
    'compilerDesign',
    'ComputerNetworks',
    'DataAnalyticsandBigData',
    'Designandanalysisofalgorithm',
    'discreteMathematics',
    'MachineLearning',
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = (subject) => {
    const fileName = subject.replace(/\s+/g, '%20') + '.pdf'; // Encode spaces
    const link = document.createElement('a');
    link.href = `/doc/${fileName}`;
    link.download = `${subject}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter subjects based on search
  const filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedSubjects = isOpen
    ? filteredSubjects
    : filteredSubjects.slice(0, 6);

  return (
    <section className="py-16 bg-blue-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-white mb-8">
          Previous Year Papers - Subject-wise
        </h2>

        {/* Search Bar */}
        <div className="mb-8 max-w-xl mx-auto bg-white shadow-md rounded-lg text-gray-800">
          <input
            type="text"
            placeholder="Search subjects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Grid Layout for Subjects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSubjects.length > 0 ? (
            displayedSubjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {subject}
                </h3>
                <p className="text-gray-600 mt-4">
                  Access previous year papers for {subject} to boost your exam
                  preparation.
                </p>
                <button
                  onClick={() => handleDownload(subject)}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Download PDF
                </button>
              </div>
            ))
          ) : (
            <p className="text-white col-span-full text-center">
              No subjects found.
            </p>
          )}
        </div>

        {/* Toggle Button */}
        {filteredSubjects.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={handleToggle}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              {isOpen ? 'Show Less' : 'Show More Subjects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousYearPapersSubjectWise;

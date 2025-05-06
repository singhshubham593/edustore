import React, { useState } from 'react';

const PreviousYearPapersSubjectWise = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Sample subjects
  const subjects = [
    'Mathematics',
    'Computer Science',
    'Physics',
    'Chemistry',
    'Biology',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Economics',
    'Information Technology',
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = (subject) => {
    const fileName = subject.replace(/\s+/g, '%20') + '.pdf'; // Encode spaces
    const link = document.createElement("a");
    link.href = `/public/${fileName}`;
    link.download = `${subject}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">Previous Year Papers - Subject-wise</h2>
        
        {/* Grid Layout for Subjects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display Initial Subjects */}
          {subjects.slice(0, isOpen ? subjects.length : 6).map((subject, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800">{subject}</h3>
              <p className="text-gray-600 mt-4">Access previous year papers for {subject} to boost your exam preparation.</p>
              <button onClick={() => handleDownload(subject)} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Download PDF
              </button>
            </div>
          ))}
        </div>

        {/* Toggle Button for More Subjects */}
        <div className="text-center mt-8">
          <button
            onClick={handleToggle}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {isOpen ? 'Show Less' : 'Show More Subjects'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreviousYearPapersSubjectWise;

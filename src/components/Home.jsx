import React from 'react'
import web from '../Property/web.jpg';
import Card from '../pages/Card'
import About from './About';
import { Outlet, useNavigate } from 'react-router-dom';
import SubCol from '../pages/SubCol';
import book from '../Property/book.jpg';
import phone from '../Property/phone.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sub/interques');
  };
  const handleSub = () => {
    navigate('/sub/SubCol');
  };
  const handleDsa = () => {
    navigate('/sub/DsaQues');
  };


  return (
    <>
    <Outlet />
      <div className="home min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <img src={web} alt="web Home page" className="w-full hidden md:block flex justify-centre"/>
        <img src={phone} alt="mobile page" className="w-full md:hidden flex justify-centre"/>
        <div className='mx-auto pt-12 flex flex-col justify-center items-center'>
        <h2 className="text-blue-700 font-extrabold text-5xl font-bold mb-4">Learn</h2>
        <p className="text-lg  mx-16">
          Empowering students with previous papers, interview preparation, and DSA knowledge to
          ace their exams and secure their dream job.
        </p>
           
        </div>
        
        <div className=" bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
          <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
           {/* Left Image */}
          <div className="md:w-1/2">
          <img
            src={book}
            alt="Study"
            className="object-cover w-full h-full p-8 rounded-3xl"
          />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to DevCrack</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your one-stop solution for:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow-sm">
              <button onClick={handleSub} className="text-xl font-semibold text-blue-700">📘 Semester Papers</button>
              <p className="text-gray-700">Get access to previous year university question papers to help you prepare effectively.</p>
            </div>

            <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded-xl shadow-sm">
              <button onClick={handleClick} className="text-xl font-semibold text-blue-700">💼 Interview Questions</button>
              <p className="text-gray-700">Practice real interview questions asked in software development roles.</p>
            </div>

            <div className="p-4 bg-purple-50 border-l-4 border-purple-400 rounded-xl shadow-sm"> 
              <button onClick={handleDsa} className="text-xl font-semibold text-blue-700">🧠 DSA Challenges</button>
              <p className="text-gray-700">Sharpen your Data Structures and Algorithms skills with curated questions.</p>
            </div>
          </div>
          </div>
        </div>
        </div>
        <About />
      </div>
    </>
  )
}

export default Home

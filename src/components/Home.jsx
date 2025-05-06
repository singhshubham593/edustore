import React from 'react'
import web from '../Property/web.jpg';
import Card from '../pages/Card'
import About from './About';
import { Link } from 'react-router-dom';
import SubCol from '../pages/SubCol';
import book from '../Property/book.jpg';

const Home = () => {
  return (
    <>
      <div className="home">
        <img src={web} alt="web Home page" className="flex justify-centre"/>
        <div className='mx-auto pt-12 flex flex-col justify-center items-center'>
        <h2 className="text-blue-700 font-extrabold text-5xl font-bold mb-4">NextStep</h2>
        <p className="text-lg mb-8 mx-16">
          Empowering students with previous papers, interview preparation, and DSA knowledge to
          ace their exams and secure their dream job.
        </p>
          <div className=' flex flex-col justify-center items-center  md:flex-row '>
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img className="w-full" src={book} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                  <div className="font-semibold text-xl mb-2">try</div>
                    <p clasName="text-gray-700 text-centre">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
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

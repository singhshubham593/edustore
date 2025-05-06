import React from 'react'
import book from '../Property/book.jpg'

const Card = () => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <img className="w-full" src={book} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2">Semister</div>
              <p clasName="text-gray-700 text-centre">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <img className="w-full" src={book} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2">The Coldest Sunset</div>
              <p clasName="text-gray-700 text-centre">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <img className="w-full" src={book} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2">The Coldest Sunset</div>
              <p clasName="text-gray-700 text-centre">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
      </div>
    </>
    
  )
}

export default Card

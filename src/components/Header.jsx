 import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
            <nav className="bg-blue-950 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="Home" className="flex items-center">
                        <img
                            src="/props/EduStore.png"
                            className="mr-3 h-8 md:h-10 rounded-lg text-white"
                            alt="EduStore"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/LoginSignup"
                            className=" text-black bg-white hover:bg-blue-500 focus:text-white focus:ring-1 focus:bg-blue-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="Home"
                            className="text-black bg-white hover:bg-blue-600 focus:text-white focus:ring-1 focus:bg-blue-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/home"
                                    className={({isActive}) =>
                                        `font-semibold block py-2 pr-4 pl-3 text-lg duration-200 ${isActive? "text-stone-50" : "text-stone-400"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Sub"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-lg ${isActive ?  "text-stone-50" : "text-stone-400"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0`
                                    }
                                >
                                    NextStep
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-lg ${isActive ?  "text-stone-50" : "text-stone-400"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

  )
}

export default Header

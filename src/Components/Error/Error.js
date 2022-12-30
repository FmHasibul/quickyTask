import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
                <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                    <p className="text-6xl text-red-700 animate-bounce md:text-7xl lg:text-9xl font-bold tracking-wider ">404</p>
                    <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Page Not Found</p>
                    <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">Sorry, the page you are looking for could not be found.</p>
                    <Link
                        to="/"
                        aria-label="Scroll down"

                    ><p className="flex items-center justify-center w-32 h-10 mx-auto duration-300 transform border border-gray-400  hover:text-teal-400 hover:border-teal-400 hover:shadow hover:scale-110" title="Return Home">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                            </svg>

                            GO HOME
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
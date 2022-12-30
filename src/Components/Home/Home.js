import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="relative flex lg:mt-20">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        The <span className='text-orange-500'>Quick Task</span> is fast
                        & easy to use
                        <span className="relative inline-block px-2">
                            <div className="absolute inset-0 transform -skew-x-12 bg-teal-400" />

                        </span>
                    </h2>
                    <p className="mb-6 text-base md:text-lg">
                        Here you can <span className='text-green-300'>Plan</span> , <span className='text-green-500'>Organize</span>, and <span className='text-green-800'>Collaborate</span> on any project with powerful task manager.
                    </p>
                    <Link
                        to="/login"
                        aria-label="Scroll down"
                        className="flex items-center justify-center w-32 h-10 mx-auto duration-300 transform border border-gray-400  hover:text-teal-400 hover:border-teal-400 hover:shadow hover:scale-110"
                    >
                        Get started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
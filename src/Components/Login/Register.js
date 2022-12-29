
import React, { useContext, useState, } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/AuthProvider';


const Register = () => {
    const { createNewUser, userProfileInfo } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [userEmail, setUserEmail] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const navigate = useNavigate()



    const handleRegSubmit = (data) => {

        createNewUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                toast.success('Account created successfully')
                const userInfo = {
                    displayName: data.name
                }
                userProfileInfo(userInfo)
                    .then(() => {
                    })
                    .catch(err => console.log(err))
                console.log(data);
                saveUserInDb(data?.name, data?.email)
                setUserEmail(data.email)
                navigate(from, { replace: true })
            })
            .catch(err =>
                console.log(err))

    }
    const saveUserInDb = (name, email) => {
        const user = { name, email }
        fetch('https://http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data);

            })
    }

    return (
        <div className='container flex items-center justify-center min-h-screen px-6 mx-auto'>


            <form onSubmit={handleSubmit(handleRegSubmit)} className="w-full max-w-md">
                <div class="flex items-center justify-center mt-6">

                    <p href="#" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                        sign up
                    </p>
                </div>
                <div className="card-body">
                    <div class="relative flex items-center mt-8">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>

                        <input {...register("name", { required: true })} type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                    </div>


                    <div class="relative flex items-center mt-6">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input {...register("email", { required: true })} type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    </div>

                    <div class="relative flex items-center mt-4">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input {...register("password", { required: true, minLength: 6 })} type="text" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                        {<p>{errors.password && 'Password should be at least 6 Unit'}</p>}
                    </div>

                    <div class="mt-6">
                        <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign Up
                        </button>

                        <div class="mt-6 text-center ">
                            <p href="#/" >
                                Already have an account?
                                <Link to='/login' class="text-sm mx-3 text-blue-500 hover:underline ">Login Here</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Register;
import React, { useContext, useState, } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { toast } from 'react-toastify';



const Login = () => {
    const { googleProvider, signIn } = useContext(AuthContext)
    const googleLoginProvider = new GoogleAuthProvider()
    const { register, handleSubmit } = useForm()
    const [loginError, setLoginError] = useState('')

    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'



    const handleLoginSubmit = data => {

        // logIn
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                setLoginError('')
                setUserEmail(data.email)


            })
            .catch(e => setLoginError('Email Or Password is not matching'))
    }

    const googleLogin = () => {
        googleProvider(googleLoginProvider)
            .then(result => {
                const user = result.user;
                saveUserInDb(user)
                console.log(user.email);
                setUserEmail(user.email)

                toast.success('Account Created Successfully')
                navigate(from, { replace: true })
            })
            .catch((err) => {
                console.log('error =', err)
            })
    }

    const saveUserInDb = (userInfo) => {
        const { displayName, email } = userInfo
        const users = {
            name: displayName,
            email,
        }
        fetch('https://http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data);
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Login Here</h1>

                <form onSubmit={handleSubmit(handleLoginSubmit)} className="mt-6">
                    <div>
                        <div className="flex ">
                            <label htmlfor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>

                        </div>

                        <input {...register('email', { required: true })} type="email" id='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        <p className="label-text-alt text-red-600 link link-hover">{loginError}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex ">
                            <label htmlfor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>

                        </div>

                        <input {...register("password", { required: true })} type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        <p className="label-text-alt text-red-600 link link-hover">{loginError}</p>
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b-2  lg:w-1/5"></span>

                    <p className="text-xs text-center text-gray-500 uppercase  ">
                        or login with
                    </p>

                    <span className="w-1/5 border-b-2 dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                    <button onClick={googleLogin} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                            </path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>


                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to="/register" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
            </div>



        </div>
    );
};

export default Login;
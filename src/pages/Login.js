import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

export default function Login() {
    const [showPassword,setShowPassword]=React.useState(false);
  return (
    <div className='block min-h-screen bg-gray-50 dark:bg-slate-900'>
        <NavBar/>
        <div className='block py-8 px-3'>

            <section className="bg-gray-50 dark:bg-slate-800 lg:max-w-6xl mx-auto rounded-2xl drop-shadow-lg shadow-sm">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                    className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 "
                    >
                        <div
                        className="absolute inset-0 bg-white/5 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
                        ></div>
                    <img
                        alt="Night"
                        src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                        className="absolute inset-0 h-full w-full object-cover opacity-90"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12 ">
                        <a className="title-font font-bold items-center text-gray-900 mb-4 md:mb-0 text-center">
                            <span className="text-6xl text-gray-300">Pl<span className='text-rose-700'>ots</span></span>
                        </a>

                        <h2 className="mt-6 text-2xl font-bold text-gray-300 sm:text-3xl md:text-4xl">
                        Welcome back plots website
                        </h2>

                    </div>
                    </section>

                    <main
                    aria-label="Main"
                    className="flex items-center dark:bg-slate-800 justify-center sm:px-12 lg:col-span-7 lg:py-2 lg:px-6 xl:col-span-6"
                    >
                        
                        <div className=" w-full px-2 py-3">
                            <h1 className='mb-3 text-3xl text-gray-900 dark:text-gray-300'>Login into your account</h1>

                            <form action="" className="mx-auto mt-8 mb-0 space-y-4 w-full h-full dark:text-gray-300">
                                <div>
                                    <label for="email" className="sr-only">Email</label>

                                    <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full rounded-lg text-lg text-gray-900 border-gray-200 p-4 pr-12  shadow-sm dark:bg-slate-900 dark:border-slate-800"
                                        placeholder="Enter email"
                                    />

                                    <span
                                        className="absolute inset-y-0 right-0 grid place-content-center px-4"
                                    >
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                        </svg>
                                    </span>
                                    </div>
                                </div>

                                <div>
                                    <label for="password" className="sr-only">Password</label>

                                    <div className="relative">
                                    <input
                                        type={!showPassword?"password":"text"}
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-lg text-gray-900 shadow-sm dark:text-gray-300  dark:bg-slate-900 dark:border-slate-800"
                                        placeholder="Enter password"
                                    />

                                    <span
                                        className="absolute inset-y-0 right-0 grid place-content-center px-4"
                                        onClick={()=>setShowPassword(!showPassword)}
                                    >
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                        </svg>
                                    </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-900 dark:text-gray-300">
                                        No account?
                                        <Link to="/create-new-account" className="text-rose-600 underline">Sign up</Link>
                                    </p>

                                    <button
                                    type="submit"
                                    className="inline-block rounded-lg  px-5 py-3 text-sm font-medium dark:text-gray-300  bg-rose-600 hover:bg-transparent hover:border-rose-600 hover:text-gray-900  border border-rose-600 text-white"
                                    >
                                    Sign in
                                    </button>
                                </div>
                            </form>

                        </div>
                    </main>
                </div>
                
            </section>
        </div>
        <Footer/>
    </div>

  )
}

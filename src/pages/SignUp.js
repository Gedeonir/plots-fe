import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='block min-h-screen bg-gray-50 dark:bg-slate-900'>
      <NavBar/>
      <div className='block py-8 px-3'>
        <section className="bg-gray-50 lg:max-w-6xl mx-auto rounded-2xl drop-shadow-lg shadow-sm">
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

                <div className="hidden lg:relative lg:block lg:p-12">
                    <a className="title-font font-bold items-center text-gray-900 mb-4 md:mb-0 text-center">
                        <span className="text-6xl text-gray-300">Pl<span className='text-rose-700'>ots</span></span>
                    </a>

                    <h2 className="mt-6 text-2xl font-bold text-gray-300 sm:text-3xl md:text-4xl">
                    Welcome to plots website
                    </h2>

                </div>
                </section>

                <main
                aria-label="Main"
                className="flex items-center dark:bg-slate-800 justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                <div className="max-w-xl lg:max-w-3xl px-3">
                    <h1 className='lg:text-3xl text-gray-900 dark:text-gray-300 sm:text-sm'>Create a new account</h1>

                    <form action="#" className="mt-8 grid grid-cols-6 gap-6 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-300">
                    <div className="col-span-6 sm:col-span-3">
                        <label
                        for="FirstName"
                        className="block text-sm font-medium "
                        >
                        First Name
                        </label>

                        <input
                        type="text"
                        id="FirstName"
                        name="first_name"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg shadow-sm dark:bg-slate-900 dark:border-slate-800"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                        for="LastName"
                        className="block text-sm font-medium"
                        >
                        Last Name
                        </label>

                        <input
                        type="text"
                        id="LastName"
                        name="last_name"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg  shadow-sm dark:bg-slate-900 dark:border-slate-800"
                        />
                    </div>

                    <div className="col-span-6">
                        <label for="Email" className="block text-sm font-medium">
                        Email
                        </label>

                        <input
                        type="email"
                        id="Email"
                        name="email"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg shadow-sm dark:bg-slate-900 dark:border-slate-800"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                        for="Password"
                        className="block text-sm font-medium "
                        >
                        Password
                        </label>

                        <input
                        type="password"
                        id="Password"
                        name="password"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm  shadow-sm dark:bg-slate-900 dark:border-slate-800"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                        for="PasswordConfirmation"
                        className="block text-sm font-medium"
                        >
                        Password Confirmation
                        </label>

                        <input
                        type="password"
                        id="PasswordConfirmation"
                        name="password_confirmation"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm shadow-sm dark:bg-slate-900 dark:border-slate-800"
                        />
                    </div>

                    <div className="col-span-6">
                        <label for="MarketingAccept" className="flex gap-4">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800"
                        />

                        <span className="text-sm">
                            I want to receive emails about events, product updates and
                            company announcements.
                        </span>
                        </label>
                    </div>

                    <div className="col-span-6">
                        <p className="text-sm">
                        By creating an account, you agree to our
                        <a href="#" className="text-rose-600 mx-3 underline">
                            Terms and Conditions
                        </a>
                        and
                        <a href="#" className="text-rose-600 underline mx-3">Privacy policy.</a>
                        </p>
                    </div>

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                        className="inline-block shrink-0 rounded-md dark:text-gray-300  bg-rose-600 hover:bg-transparent hover:border-rose-600 hover:text-gray-900  border border-rose-600 px-12 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring active:text-rose-600"
                        >
                        Create an account
                        </button>

                        <p className="mt-4 text-sm text-gray-900 dark:text-gray-300 sm:mt-0">
                        Already have an account?
                        <Link to="/login-into-your-account" className="text-rose-600 underline">Log in</Link>.
                        </p>
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

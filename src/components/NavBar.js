import React from 'react'
import Switcher from './Switcher'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header aria-label="Site Header" className="body-font sticky top-0 z-10 bg-gray-200 dark:bg-slate-800">
      <div
        className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
      >
        <a className="title-font font-bold items-center text-gray-900 mb-4 md:mb-0 text-center">
          <span className="text-2xl text-gray-900 dark:text-gray-300">Pl<span className='text-rose-700'>ots</span></span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-2 text-lg">
              <li>
                <a className="mr-5 text-gray-700 cursor-pointer hover:text-rose-700 transition-all duration-150 dark:text-gray-300 dark:hover:text-rose-700" href="/">
                  Home
                </a>
              </li>

              <li>
                <a className="mr-5 text-gray-700 cursor-pointer hover:text-rose-700 transition-all duration-150 dark:text-gray-300 dark:hover:text-rose-700" href="/">
                  About
                </a>
              </li>

              <li>
                <a className="mr-5 text-gray-700 cursor-pointer hover:text-rose-700 transition-all duration-150 dark:text-gray-300 dark:hover:text-rose-700" href="/">
                 FAQ
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center gap-2">
            
            <Switcher/>

            <div className="sm:flex sm:gap-2">
              <Link
                className="inline-flex items-center bg-rose-600 hover:bg-transparent hover:border-rose-600  border border-rose-600 px-8 py-2 text-gray-100 hover:text-rose-600 mx-3 focus:outline-none  rounded-xl text-sm md:mt-0"
                to="/login-into-your-account"
              >
                Signin
              </Link>
            </div>

            <button
              className="block rounded text-lg p-2.5 text-gray-900 transition hover:text-rose-600/75 md:hidden dark:text-gray-100"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

  )
}

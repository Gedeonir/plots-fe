import React from 'react'

export default function CategoryDropdown() {
  return (
    <div id="dropdown" className="z-10 absolute right-8 mx-8 w-48 my-12 bg-white divide-y  divide-gray-100 rounded-lg shadow dark:bg-slate-800">
        <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
            <button className="px-3 py-2 w-full text-left">
                Most popular
            </button>
            <button className="px-3 py-2 w-full text-left">
                Ratings
            </button>
            <button className="px-3 py-2 w-full text-left">
                Date
            </button>
            <button className="px-3 py-2 w-full text-left">
                Location
            </button>
            <button className="px-3 py-2 w-full text-left">
                Free
            </button>
        </ul>
    </div>
  )
}

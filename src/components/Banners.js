import React from 'react'

export default function Banners() {
  return (
    <section
        className="relative bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"
    >
        <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
        ></div>

        <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
        <div className="max-w-5xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900">
            We connects you to any type of plots

            <strong className="block font-extrabold text-rose-700">
                near you
            </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-gray-900">
            Concert,House party,Birthday parties,etc
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
                href="#"
                className="block w-full hover:bg-transparent hover:border-rose-600  border border-rose-600 rounded bg-rose-600 px-12 py-3 text-sm font-medium text-gray-100 shadow hover:text-gray-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
                Get Started
            </a>
            </div>
        </div>
        </div>
    </section>
  )
}

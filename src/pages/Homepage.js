import React from 'react'
import Banners from '../components/Banners'
import Cards from '../components/Cards'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SwipableCards from '../components/Cards'
export default function Homepage() {
  return (
    <div className='block min-h-screen bg-gray-50 dark:bg-slate-900 w-full'>
      <NavBar/>
      <Banners/>
      <Cards section="Upcoming plots"/>
      <Cards section="Recent plots"/>
      <Footer/>
    </div>
  )
}

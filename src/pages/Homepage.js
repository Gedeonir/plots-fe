import React,{useState,useEffect} from 'react'
import Banners from '../components/Layout'
import Cards from '../components/Cards'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'



export default function Homepage() {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  
  return (
    <Layout>
      <div className='px-3 pb-48 lg:pb-24 w-full mx-auto relative max-h-screen overflow-y-auto'>
        <Cards/>
      </div>
      
    </Layout>
  )
}


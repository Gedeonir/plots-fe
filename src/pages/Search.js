import React from 'react'
import Layout from '../components/Layout'
import {CiSearch} from 'react-icons/ci'
import {BiArrowBack} from 'react-icons/bi'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Search() {
  const [searchWord,setSearchWord] = React.useState("");
  const [clicked,setClicked]=React.useState(false);


  
  const Cards=[1,2,3,4,5,6,7,8,9,10]

  const options = {
    nav: true,
    navText: ["<div class='nav-btn prev-slide bg-btn_primary text-secondary w-8 h-8 rounded-full absolute inset-y-20 left-0 text-xl'>‹</div>", "<div class='nav-btn next-slide bg-btn_primary text-secondary w-8 h-8 rounded-full absolute inset-y-20 right-0 text-xl'>›</div>"],
    // autoplay: true,
    dots: false,
    // autoplayTimeout: 8500,
    smartSpeed: 2500,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 6
        },
        1000: {
            items: 8
        }
    },
  };

  return (
    <Layout>
        <div className='px-3 pb-48 lg:pb-24 mb-2 mx-auto rounded-lg max-h-screen min-h-screen overflow-y-auto text-text_secondary overflow-x-hidden'>
          <form className='py-4 px-4 grid grid-cols-3 relative mb-4'>
            <input type='text' name="search" placeholder='Hashtags,id,people' className='w-full col-span-2 pl-12 pr-5 rounded-lg border-none outline-none' value={searchWord} onChange={(e)=>{setSearchWord(e.target.value)}} onClick={()=>setClicked(true)}/>
            {searchWord===''?<CiSearch size={24} className='absolute top-6 left-6'/>:<BiArrowBack size={24} className='absolute top-6 left-6' onClick={()=>{setClicked(false);setSearchWord("")}}/>}
            {searchWord!==''&&<p className='text-text_primary py-2 px-2'>Clear</p>}
          </form>
          {!clicked&&
          <>
          <div>
            <h3 className="px-3 py-3 font-bold text-btn_primary opacity-70">Popular Hashtags</h3>
            <OwlCarousel className="w-full relative py-4 px-4 owl-carousel owl-theme" {...options} >
              {Cards.map((card)=>{
                return(  
                  <div className="h-32 mx-2 drop-shadow-lg rounded-lg cursor-pointer bg-opacity-40 my-4 item" style={{background:`#${Math.random().toString(16).substr(-6)}`}}>
                    <div className="bg-text_secondary_2 h-full w-full py-12 text-center px-4 rounded-lg bg-opacity-70 hover:opacity-60 text-text_primary font-bold">
                      <p>#music</p>
                    </div>
                  
                  </div>
                )

              })}
              
            </OwlCarousel>
          </div>

          <div>
            <h3 className="px-3 py-3 font-bold text-btn_primary opacity-70">Browse all Hashtags</h3>
            <div className="w-full relative grid lg:grid-cols-6 grid-cols-2 md:grid-cols-4 gap-2">
              {Cards.map((card)=>{
                return(  
                  <div className="drop-shadow-lg rounded-lg cursor-pointer bg-opacity-40" style={{background:`#${Math.random().toString(16).substr(-6)}`}}>
                    <div className="bg-text_secondary_2 h-full w-full py-12 text-center px-4 rounded-lg bg-opacity-70 hover:opacity-60 text-text_primary font-bold">
                      <p>#music</p>
                    </div>
                  
                  </div>
                )

              })}
              
            </div>
          </div>
          </>
          }
          {clicked&&
            <>
              <div className="flex justify-between">
                {searchWord===''?(
                <>
                <h3 className="px-3 py-3 font-bold text-btn_primary opacity-70">Recent searches</h3>
                <div className='py-1 items-end lg:px-4'>
                  <button className='text-text_secondary w-32 text-left hover:text-opacity-70 text-sm focus:outline-none transition duration-150 ease-in-out'>Clear search history</button>
                </div>
                </>
                ):(<h3 className="px-3 py-3 font-bold text-btn_primary opacity-70">Search result "{searchWord}"</h3>)}
              </div>

            </>
          }



        </div>
     
    </Layout>
  )
}

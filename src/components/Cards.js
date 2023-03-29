import React,{useState} from 'react'
import Card from './Card';
import CategoryDropdown from './Dropdown';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Color from 'color-thief-react';


const movies = [
    "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6585/1316585-h-adcf1367b9d9",
    "https://flxt.tmsimg.com/assets/p10291550_b_v13_aj.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSt2dtRA6TOwAHcak91csC79bvaiKGwpF8A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUg8tiXiTgopFti_rIEWwJi-26HX4ffharg&usqp=CAU",
    "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/628cbc5bc3e67_json_image_1653390427.webp"
  ];
  
export default function Cards(props) {
    const [open,setOpen]=useState(false);
    const [openModal,setOpenModal]=useState(false)



    const options = {
        stagePadding: 15,
        margin: 24,
        nav: false,
        navText: ["<div class='nav-button owl-prev sm:hidden'>‹</div>", "<div class='nav-button owl-next sm:hidden'>›</div>"],
        // autoplay: true,
        dots: false,
        // autoplayTimeout: 8500,
        smartSpeed: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
      };

    

  return (
    <div className='w-full relative mx-auto'>
    <h3 className='px-8 py-3 font-bold text-btn_primary opacity-70'>{props.category}</h3>
    <OwlCarousel className="w-full relative " {...options} >
      {movies.map((src,index)=>{
        return(
          <Color key={src} src={src} format="hex" crossOrigin='*'>
            {( data, loading, error) => (
              <Card image={src} bg={data?.data}/>
            )}
          </Color>
        )
        })}
    </OwlCarousel>
    </div>
  )
}


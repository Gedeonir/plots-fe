// import React,{useState} from 'react'
// import Card from './Card';
// import CategoryDropdown from './CategoryDropdown';


// export default function Cards(props) {
//     const [open,setOpen]=useState(false);
//     const [openModal,setOpenModal]=useState(false)

//   return (
//     <div className='py-4 px-8 relative'>
//         <div>
//             <div className='flex justify-between px-8'>
//                 <h1 className="lg:text-xl sm:text-sm mb-2 text-gray-900 font-medium text-left dark:text-gray-100">{props.section}</h1>
//                 <button onClick={() => setOpen(!open)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-48 justify-between bg-rose-50 hover:bg-rose-100 focus:ring-1 focus:ring-rose-50 focus:outline-none font-medium rounded-xs text-sm px-4 py-1 h-10 text-center inline-flex items-center dark:bg-slate-800 text-gray-900 dark:text-gray-300" type="button">Filter by<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
//                 {open &&
//                         <CategoryDropdown/>
//                     }
//             </div>
//             <div className="lg:grid lg:grid-cols-4 lg:gap-3 px-8 py-2 mx-auto  my-2 sm:block">
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
                
//             </div>
//             {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                 <button className="btn btn-circle text-2xl text-gray-900 font-bold dark:text-gray-100 transition-all duration-150 hover:text-rose-700 dark:hover:text-rose-700">❮</button> 
//                 <button className="btn btn-circle text-2xl text-gray-900 dark:text-gray-100 font-bold transition-all duration-150 hover:text-rose-700 dark:hover:text-rose-700">❯</button>
//             </div>  */}
//         </div>
       

        
//     </div>
//   )
// }

import React, { useState } from 'react';
import useSwipeable from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../index.css';

const data = [
  {
    id: 1,
    image: 'https://www.apple.com/v/home/bj/images/overview/hero__d4k4xudg48y6_large.jpg',
    title: 'Introducing the most powerful MacBook Pro ever',
    subtitle: 'Supercharged for pros.',
  },
  {
    id: 2,
    image: 'https://www.apple.com/v/home/bj/images/overview/hero__cog3np37fzqq_large.jpg',
    title: 'AirPods Max',
    subtitle: 'The ultimate listening experience.',
  },
  {
    id: 3,
    image: 'https://www.apple.com/v/home/bj/images/heroes/iphone-12-pro/hero__dvsbgi5j5o62_large.jpg',
    title: 'iPhone 12 Pro',
    subtitle: 'It’s a leap year.',
  },
  {
    id: 3,
    image: 'https://www.apple.com/v/home/bj/images/heroes/iphone-12-pro/hero__dvsbgi5j5o62_large.jpg',
    title: 'iPhone 12 Pro',
    subtitle: 'It’s a leap year.',
  },
  {
    id: 3,
    image: 'https://www.apple.com/v/home/bj/images/heroes/iphone-12-pro/hero__dvsbgi5j5o62_large.jpg',
    title: 'iPhone 12 Pro',
    subtitle: 'It’s a leap year.',
  },
];

const SwipableCards = () => {
  const [index, setIndex] = useState(0);

  const handleSwipe = (delta) => {
    const newIndex = index + delta;
    if (newIndex >= 0 && newIndex < data.length) {
      setIndex(newIndex);
    }
  };

  const cardStyle = {
    transform: `translateX(${index * -100}%)`,
  };

  return (
    <useSwipeable
      onSwipedLeft={() => handleSwipe(1)}
      onSwipedRight={() => handleSwipe(-1)}
    >
      <div className="cards-container">
        <div className="cards" style={cardStyle}>
          {data.map((card) => (
            <div key={card.id} className="card">
              <img src={card.image} alt={card.title} />
              <div className="content">
                <h2>{card.title}</h2>
                <p>{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="nav">
          <button onClick={() => handleSwipe(-1)}>
            <FaChevronLeft />
          </button>
          <button onClick={() => handleSwipe(1)}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </useSwipeable>
  );
};

export default SwipableCards;

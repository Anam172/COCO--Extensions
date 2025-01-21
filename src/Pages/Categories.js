import React from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
    const cardData = [
        {
            id: 1, 
            title: "CLIP INS",
            products: "1 PRODUCTS",
            image: "https://files.cdn-files-a.com/uploads/9376397/800_gi-668eb9f864da6.jpg",
             link: "clipIns",
        },
        {
            id: 2,
            title: "WIGS",
            products: "1 PRODUCTS",
            image: "https://files.cdn-files-a.com/uploads/9376397/800_gi-668eba25b3db5.jpg",
            link: "wigs",
        },
        {
            id: 3,
            title: "TAPES",
            products: "1 PRODUCTS",
            image: "https://files.cdn-files-a.com/uploads/9376397/800_gi-668eba7ee41a9.jpg",
             link: "tapes",
        },
        {
            id: 4,
            title: "WEFTS",
            products: "1 PRODUCTS",
            image: "https://files.cdn-files-a.com/uploads/9376397/800_gi-668eba935fad5.jpg",
            link: "wefts",
        },
    ];
  return (
    <>
    <div id='categories' className='px-8 py-24 text-center justify-center bg-[#f4f4f4]'>
        <h1 className='relative text-center text-3xl'>Categories</h1>
        <hr className="border-t-4 border-[#d0ae81] w-[10%] mx-auto md: mt-4" />
       <div className='flex flex-col p-6 md:flex-row w-full md:h-80 justify-center gap-6 text-center m-auto'>
          {cardData.map((Categories) => (
            <div
            key = {Categories.id}
            className = "bg-cover h-auto bg-center rounded-lg shadow-md w-64  transition-transform duration-300 ease-out transform hover:scale-110 "
            style={{
                backgroundImage: `url(${Categories.image})`,
            }}
            >
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                <div className="relative z-10 text-center pt-24">
                <Link to={Categories.link} className="text-white text-3xl font-bold">
                    {Categories.title}
                </Link>
                <h3 className="text-white text-xs my-2">{Categories.products}</h3>
                </div>
            </div>
          ))}
       </div>
    </div>
    <div className='flex flex-col lg:flex-row bg-[#f2ece4]'>
       <div>
        <img className='lg:w-[67vw]' src="https://files.cdn-files-a.com/uploads/9376397/2000_668ebc11be3f1_filter_668ebc7e54ced.png"
         alt='img' style={{height: "700px"}}/>
       </div>
       <div className='text-left py-4 justify-between m-auto lg:p-0'>
         <h1 className='pb-6 text-3xl py-4 md:text-6xl font-bold '>Discover Your<br /> New Look</h1>
         <hr className=" border-t-8 border-[#d0ae81] w-[30%] mx-auto md:mx-0 mt-4" />
         <p className='pt-4 text-2xl text-semibold'>Transform Your Hair,</p>
         <p className='text-2xl text-semiblod'>Transform Your Life</p>
       </div>
    </div>
    </>
  )
}

export default Categories
import React from 'react'
import About from './About'
import Categories from './Categories'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <div id='home' className='flex flex-col md:flex-row items-center justify-between bg-[#f4f4f4]' >
       <div className='md:w-1/2 text-center px-20 md:text-left justify-center Leading-loose'>
         <h1 className='text-3xl text-black font-bold p-4 leading-loose md:text-6xl'>
            <span className='text-[#d0ae81]'>COCO</span><br />
             SHADES<br /> EXTENSIONS
         </h1>
         <p className='text-2xl md:text-3xl mt-4 px-4 '>Enhancing Your
         <br />
         Natural Beauty
         </p>
         <div className="mt-6 flex flex-col md:flex-row ml-4 md:gap-2 items-center md:items-start">
          <button className="border border-[#d0ae81] text-black py-2 px-6 rounded-2xl bg-[#d0ae81] mt-4 md:mt-0">
            Shop Now!
          </button>
          <button className=" border border-[#d0ae81] text-black  py-2 px-6 rounded-2xl bg-[#d0ae81] mt-4 md:mt-0">
            Contact Us
          </button>
          </div>
       </div>
       <div className="md:w-full h-full mt-8 md:mt-0 flex">
       <img  src="https://files.cdn-files-a.com/uploads/9376397/2000_668eb3a1af9de.png"
        alt="COCO Shades Extensions" className='w-full'
        />
        </div>
    </div>
    <About />
    <Categories />
    <Services />
    <Testimonials />
    <Contact />
    
    </>
  )
}

export default Home
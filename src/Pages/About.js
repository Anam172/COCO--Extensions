import React from 'react'

const About = () => {
  return (
    <div id='about' className=' flex flex-col  bg-[#f2ece4] lg:flex-row items-center justify-around px-4 py-8 md:py-32 md:px-20'>
        <div className="lg:w-1/2 flex justify-end">
        <img
          src="https://files.cdn-files-a.com/uploads/9376397/800_gi-668fb86a0be51.jpg"
          alt="COCO Shades"
          className="w-full max-w-sm md:max-w-xl shadow-xl"
        />
      </div>
      <div className=" lg:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left">
        <h2 className="relative text-3xl sm:pt-4 lg:text-5xl font-[600] pb-4 text-black">
          About Us
        </h2>
        <hr className="border-t-4 border-[#d0ae81] w-[5%] mx-auto md:mx-0 mt-4" />
        <p className="text-lg text-black md:w-[80%] font-medium mt-6 pt-4">
          At Coco Extensions, we believe in enhancing the natural beauty of our
          clients with the finest quality hair extensions. Our team is dedicated
          to providing a seamless blend and a perfect match, ensuring you look
          and feel amazing. Experience the transformation with our luxurious and
          professionally applied extensions.
        </p>
      </div>
    </div>
  )
}

export default About
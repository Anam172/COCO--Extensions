import React from 'react'
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    const cards =[{
        id: 1,
        title: "Emily Johnson",
        description: "Flawless Extensions gave me the hair of my dreams! The quality and service are outstanding.",
    },
    {
        id: 2,
        title: "Sarah Thompson",
        description: "I can't believe the difference! My hair looks so much fuller and healthier with these extensions.",
    }
];
  return (
    <>
    <div id='testimonials' className='bg-[#f2ece4] p-8'>
        <h1 className='relative text-center text-3xl font-semibold'>Testimonials</h1>
        <hr className="border-t-4 border-[#d0ae81] w-[15%] mx-auto md: mt-4" />
        <div className='flex justify-center gap-8 p-4 mx-16'>
          {cards.map((Testimonials) => (
           <div
           key = {Testimonials.id}
           className='bg-white rounded-md border-gray-300 shadow-md p-4 w-86'>
            <h1 className='text-xl font-semibold pb-2'>{Testimonials.title}</h1>
            <p className='text-lg font-normal'>{Testimonials.description}</p>
            <div className="flex justify-center space-x-1 text-yellow-500 pt-4">
                {Array(5)
                    .fill(0)
                    .map((_, index) => (
                    <FaStar key={index} />
                    ))}
                </div>
            </div>
            ))}
        </div>
    </div>
    <div
        className=' h-[80vh] w-full bg-cover bg-center'
        style={{
            backgroundImage: `url("https://files.cdn-files-a.com/uploads/9376397/2000_668fb80fd4b09.png")`
        }}
    >
    </div>
    </>
  )
}

export default Testimonials
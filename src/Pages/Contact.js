import React from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className='text-center p-20 bg-[#f2ece4]'>
       <h1 className='relative text-center text-3xl'>Contact Us</h1>
       <hr className="border-t-4 border-[#d0ae81] w-[10%] mx-auto md: mt-4" /> 
       <div className='flex flex-col lg:flex-row  gap:4 justify-around m-4'>
       <div className='justify-items-center float-end'>
            <p className="text-md font-normal pb-4 mt-12">United Kingdom</p>
            
            <div className="flex items-center space-x-2 text-[#d0ae81]">
                <FaPhone />
                <p className="text-md">+44-7512307397</p>
            </div>
            
            <div className="flex items-center space-x-2 text-[#d0ae81]">
                <FaEnvelope />
                <p className="text-md">bethdonaldson6mw@gmail.com</p>
            </div>

            <div className="flex items-center space-x-2  text-[#d0ae81]">
                <FaClock />
                <p className="text-md font-normal text-black">Mon-Fri - 08:00-19:00</p>
            </div>
        </div>
      <div className="lg:p-8 max-w-xl py-4 ">
      <form className="space-y-6">
        <div className="flex flex-row sm:flex-column gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full md:w-1/2 sm:px-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d0ae81]"
          required />
          <input
            type="text"
            placeholder="Phone"
            className="w-full md:w-1/2 sm:px-2  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d0ae81]"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d0ae81]"
          required />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d0ae81]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#d0ae81] text-black font-semibold py-4 rounded-xl"
        >
          Contact Us
        </button>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
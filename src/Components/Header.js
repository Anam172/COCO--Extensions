import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
    <div className='sticky top-0 bg-white  flex items-center justify-between px-4 py-2'>
       <div className='flex items-center space-x-2'>
        <img 
        src='https://files.cdn-files-a.com/uploads/9376397/400_filter_nobg_668fb89eb8b6a.png'
        alt='Coco-Extensions'
        style={{height: "50px"}}
        />
        <span className='text-xl'>COCO Extensions</span>
       </div>
       <div>
        <ul  className='flex space-x-4 '>
       
            <li>
                <NavLink  
                to='/'
                className={({isActive}) => 
                    isActive ? "border border-[#d0ae81] font-semibold rounded-2xl text-[#d0ae81] text-lg px-2 py-1" :
                 "text-black text-lg p-1 font-semibold hover:text-[#d0ae81] hover:border border-[#d0ae81] hover: rounded-2xl"
                }
                >
                 Home
                </NavLink>
            </li> 
            <li>  
                <NavLink to='/about'
                className={({isActive}) => 
                    isActive ? "border border-[#d0ae81] font-semibold rounded-2xl text-[#d0ae81] text-lg px-2 py-1" :
                 "text-black text-lg p-1 font-semibold hover:text-[#d0ae81] hover:border border-[#d0ae81] hover: rounded-2xl"
                }
                >
                 About
                </NavLink>
            </li>  
            <li>
                <NavLink to='/categories'
                className={({isActive}) => 
                    isActive ? "border border-[#d0ae81] font-semibold rounded-2xl text-[#d0ae81] text-lg px-2 py-1" :
                 "text-black text-lg p-1 font-semibold hover:text-[#d0ae81] hover:border border-[#d0ae81] hover: rounded-2xl"
                }
                >
                Store
                </NavLink>
            </li>
            <li>
                <NavLink to='/services'
                className={({isActive}) => 
                    isActive ? "border border-[#d0ae81] font-semibold rounded-2xl text-[#d0ae81] text-lg px-2 py-1" :
                 "text-black text-lg p-1 font-semibold hover:text-[#d0ae81] hover:border border-[#d0ae81] hover: rounded-2xl"
                }
                >
                Services
                </NavLink>
            </li>
            <li>
                <NavLink to='/testimonials'
                className={({isActive}) => 
                    isActive ? "border border-[#d0ae81] font-semibold rounded-2xl text-[#d0ae81] text-lg px-2 py-1" :
                 "text-black text-lg p-1 font-semibold hover:text-[#d0ae81] hover:border border-[#d0ae81] hover: rounded-2xl"
                }
                >
                Testimonials
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact'
                className={({isActive}) => 
                   isActive ? "border border-[#d0ae81] font-semibold rounded-2xl text-[#d0ae81] text-lg px-2 py-1" :
                 "text-black text-lg p-1 font-semibold hover:text-[#d0ae81] hover:border border-[#d0ae81] hover: rounded-2xl"
                }
                >
                Contact
                </NavLink>
                </li>
                <li>
              <button
                onClick={openNav}
                className="text-black text-lg pb-0 font-semibold hover:text-[#d0ae81]"
              >
                <FaShoppingCart size={24} />
              </button>
            </li>
            {/* Contact Form */}
            <li>
              <button
                onClick={openForm}
                className="text-black text-lg pb-0 font-semibold hover:text-[#d0ae81]"
              >
                <FaEnvelope size={24} />
              </button>
            </li>  
            </ul>
           </div>
         </div>
         <div 
          className={`fixed h-full top-0 -right-2 bg-white overflow-hidden z-10 transition-all ${isOpen ? 'w-[400px]' : 'w-0'}`}
          >
         <div className="flex justify-between text-center bg-[#d0ae81] h-30 p-10  text-black">
         <h2 className='text-2xl'>Your Cart</h2>
         <button  className="text-3xl font-semibold" onClick={closeNav}>&times;</button>
         </div>
         <p className='pt-10 pb-5 text-center text-gray-500'>Your shopping cart is empty</p>
         <button className='text-[#d0ae81] bg-white text-center mx-4 px-28 py-3 border border-[#d0ae81] rounded-xl hover:text-black hover:border-black' >Continue Shopping</button>
     </div>

     <div
       className={`fixed w-full top-0 left-0 bg-black text-white z-20 transition-all duration-500 ${
        isFormVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
      } overflow-hidden`}
     >
     <button
    className="absolute top-4 right-8 text-4xl font-semibold"
    onClick={closeForm}
  >
    &times;
  </button>
  <div className={`p-24 ${isFormVisible ? 'block' : 'hidden'}`}>
    <h1 className="text-center text-2xl text-white font-bold">Contact Us</h1>
    <p className="text-center pt-4 text-lg text-gray-400">
      Fill out the form or send a direct email to: bethdonaldson6mw@gmail.com
    </p>

    <form className="space-y-6 py-10 mx-auto w-11/12 md:w-6/12">
      <div className="flex flex-col gap-4">
        <label className="text-sm">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d0ae81]"
        />
        <label className="text-sm">Email Address</label>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d0ae81]"
        />
      </div>
      <label className="text-sm">Description</label>
      <textarea
        placeholder="Description"
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d0ae81]"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-[#d0ae81] text-black font-semibold py-4 rounded-xl hover:bg-black hover:text-[#d0ae81] border border-[#d0ae81]"
      >
        Contact Us
      </button>
    </form>
  </div>
</div>
     </>
  )
}

export default Header
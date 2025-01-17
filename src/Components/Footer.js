import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center p-6 text-sm'>
        <ul className='flex p-2'>
            <li>
                <Link to='/' className='p-4 ' >Home</Link>
            </li>
            <li>
                <Link to='/about' className=' p-4' >About</Link>
            </li>
            <li>
                <Link to='/categories' className='p-4 ' >Store</Link>
            </li>
            <li>
                <Link to='/services' className='p-4 ' >Services</Link>
            </li>
            <li>
                <Link to='/testimonials' className='p-4 ' >Testimonials</Link>
            </li>
            <li>
                <Link to='/contact' className='p-4 ' >Contact</Link>
            </li>
        </ul>
        <p className='mt-4'>Copyright &copy; 2025 All rights reserved - COCO Extensions</p>
    </footer>
  )
}

export default Footer
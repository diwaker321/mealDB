import React from 'react'
import { image_URL } from '../utils/constant'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mainHeader bg-[#1e1b17] flex justify-between items-center px-8 py-5'>
    <div className="imgsection">
        <img src={image_URL} className='w-40' alt="" />
    </div>

    <div className="navdetails flex">
        <ul className='flex gap-6  text-white text-lg'>
        <Link to={"/"}><li className='cursor-pointer hover:text-red-600 transition'>Home</li> </Link>
          <Link to={"/contact"}><li className='cursor-pointer hover:text-red-600 transition'>Contact Us</li> </Link>
            <li className='cursor-pointer hover:text-red-600 transition'>Cart</li>
            <li className='cursor-pointer hover:text-red-600 transition'>Log Out</li>
        </ul>
    </div>
      
    </div>
  )
}

export default Header

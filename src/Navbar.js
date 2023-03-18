import React from 'react'
import { Link } from 'react-router-dom';
import logo from './images/dark-horizontal.svg'
const Navbar = () => {
  return (
    <div className=''>

       <div className="nav fixed w-screen opacity-90 flex justify-between items-center bg-black 'text-white py-[20px] text-white px-[130px] opacity-96 h-18">


        <div className="logo w-[145px]">
            <img src={logo} alt="" />
        </div>

        <div className="menu font-poppins-200 space-x-4 text-gray-400 text-lg">
            <Link to="/learn">Learn</Link>
            <Link to="/build">Build</Link>
            <Link to="/network">Network</Link>
            <Link to="/community">Community</Link>
        </div>
       </div>
        
    </div>
  )
}

export default Navbar
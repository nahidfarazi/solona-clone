import React from 'react'
import '../.././style.css';
import Button from '../Button';
const Hero = (props) => {
  return (
    <div className='hero px-4 md:px-24 flex text-white items-center justify-center text-center '>
      <div className="">
      <h1 className='leading-tight font-[poppins] font-[600] text-[20px] md:text-[65px] px-[150px]'>Powerful for developers. Fast for everyone.</h1>

        <p className="px-[270px] font-[600] my-10 text-[20px]">Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.</p>
        
        <div className="flex justify-center space-x-2">
        <Button text="START BUILDING"/>

        <button className="border rounded-full px-6 py-2 my-4 
        hover:bg-white hover:text-black hover:border-none cursor-pointer transition-all ease-in">READ DOCS</button>
        
        </div>
      </div>
    </div>
  )
}

export default Hero
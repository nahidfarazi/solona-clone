import React from 'react'
import '../style.css';
const CommunitySection = () => {
  return (

    <div className='community_section '>

   
    <div className='flex justify-between px-[120px] items-center text-white'>

    <div>
      <p className='text-[30px]  md:text-[35px] 
      md:px-[0px] font-[600] font-[poppins] leading-tight mb-[120px]'>Join a community
              of millions.</p>
    </div>
    <div className='space-y-8 px-[190px] mt-[80px]'>
      <div className='justify-start'>
        <h1 className='text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-900 '>11.5M+</h1>
        <p>ACTIVE ACCOUNTS</p>
      </div>
      <div>
        <h1  className='text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-900 '>21.9M</h1>
        <p>NFTS MINTED</p>
      </div>
      <div>
        <h1  className='text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900 '>$0.00025</h1>
        <p>AVERAGE COST PER TRANSACTION</p>
      </div>
    </div>

    </div>

    
    
    </div>
  )
}

export default CommunitySection
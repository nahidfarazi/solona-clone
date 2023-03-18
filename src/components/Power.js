import React from 'react'
import circle from '../images/circle.svg';
import brave from '../images/brave.svg';
import discord from '../images/discord.svg';
import google from '../images/google.svg';
import jump from '../images/jump.svg';
import lollapalooza from '../images/lollapalooza.svg';
import magiceden from '../images/magiceden.svg';
import meta from '../images/meta.svg';
import stripe from '../images/stripe.svg';
import stepn from '../images/stepn.svg';

const Power = () => {
  return (
    <div className='power text-white justify-center text-center space-y-4 bg-black '>
        
        <p className='text-blue-500'> POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD</p>

        <div className='flex justify-center space-x-10'>
            <img className='w-20 space-x-2' src={brave} alt="" />
            <img className='w-20 space-x-2' src={circle} alt="" />
            <img className='w-20 space-x-2' src={discord} alt="" />
            <img className='w-20 space-x-2' src={google} alt="" />
            <img className='w-20 space-x-2' src={jump} alt="" />
            <img className='w-20 space-x-2' src={lollapalooza} alt="" />
            <img className='w-20 space-x-2' src={magiceden} alt="" />
            <img className='w-20 space-x-2' src={meta} alt="" />
            <img className='w-20 space-x-2' src={stepn} alt="" />
            <img className='w-20 space-x-2' src={stripe} alt="" />
        </div>

    </div>

    
    
  )
}

export default Power
import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='rounded-full px-8 py-3 my-4 
        bg-gradient-to-r from-pink-400 to-violet-800 hover:from-white hover:to-white  hover:text-black hover:border-none cursor-pointer transition-all ease-in
        hover:animate-bounce hover:an '>
            {props.text}
            </button>
    </div>
  )
}

export default Button
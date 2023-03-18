import React from 'react'
import Card from './Card'

const Adoption = () => {
  return (
    <div className='adoption'>

        <div className='flex justify-between px-[120px] text-white leading-tight'>
            <div>
                <h3 className='mt-[250px] text-4xl font-[600] '>Made for mass adoption</h3>
                <p>LIVE DATA</p>
            </div>
            <div>
                <Card />
            </div>
            <div></div>
        </div>

    </div>
  )
}

export default Adoption
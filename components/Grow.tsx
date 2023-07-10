import React from 'react'
import '../styles/grow.css'
import { growitems } from '../constants'

const grow = () => {
  return (
    <div className='gradient-bg mt-[265px] ' id='grow'>
      <div className=''>
        <h1 className='h1 pt-[80px]'>Grow Your Business Fast.</h1>
        <p className='mt-2 sub'>It's Simple To Start Leasing Our Game Rentals.</p>
      </div>

      <div className='flex flex-row gap-[46px] justify-center'>
          {growitems.map((item, index) => (
            <div key={index} className='flex justify-center mt-[74px] '>
              <div className='w-[305px] h-[218px]  p-[32px] rounded-xl bg-[#120B32] mb-[98px] '>
                <img src={item.imgURL} alt={item.title} className='w-[85.333px] h-[85.333px] mx-auto' />
                <h2 className='text-center mt-[32px] text-[21.333px] ' >{item.title}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default grow
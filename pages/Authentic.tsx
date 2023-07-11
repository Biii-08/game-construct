import React from 'react';
import '../styles/authentic.css';
import { authitems } from '../constants';

const Authentic = () => {
  return (
    <div id='authentic' className='background mt-[91px]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[42.667px] text-center heading mt-[91px]'>Authentic Certified software</h1>
        <p className='text-center'>Quality Products with top-notch support</p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[79px] mt-[74px] sm:grid-cols-2 auth'>
        {authitems.map((item, index) => (
          <div key={index} className='flex justify-center'>
            <div className='w-[425px] h-[372px]  gradient-border p-[32px]'>
              <img src={item.imgUrl} alt={item.title} className='w-[170.667px] h-[170.667px] image mx-auto' />
              <h2 className='text-center uppercase title mt-[32px]'>{item.title}</h2>
              <p className='text-center subtitle mt-[10px]'>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Authentic;

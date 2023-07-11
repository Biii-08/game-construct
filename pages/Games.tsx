import React from 'react';
import '../styles/games.css'
import { gameItems } from '../constants'
import MobileGame from '@/components/MobileGame';

const Games = () => {

  return (
    <div id='games' className='bg-[#0B0620]'>
      
      <div className='w-full flex justify-center items-center'>
        <div className='heading gradient-bg w-[1706.667px] h-[73.333px] flex items-center justify-center gap-[10px]'>
          <h1 className='uppercase text-[32px] text-[#FFF] text-center'>
            Top Hitlers
          </h1>
        </div>
      </div>
     <div className='hidden lg:block '>
      {[...Array(3)].map((_, index) => (
        <div key={index} className='flex flex-row justify-center gap-[50px] mt-[77px]'>
          {gameItems.map((item, itemIndex) => (
            <div key={itemIndex}>
              <img src={item.imgUrl} alt={item.title} className='w-[306.67px] h-[400px]' />
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
    
     <div className="block md:hidden">
        <MobileGame />
      </div>
  </div>
  );
};

export default Games;

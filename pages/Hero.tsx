import React from 'react';
import '../styles/hero.css';
import '../styles/globals.css';

const Hero = () => {
  return (
    <div id='hero' className='relative '>
        <div className='relative'>
            <img
              src='/assets/image/hero.png'
              alt='hero'
              className='gradient-bg shadow-xl '
              style={{ width: '100%', height: '100%' }}
            />

          <div className='absolute top-[314.5px] flex justify-center flex-col items-center w-full texts'>
            <h1 className='text-center text-[63px] text-wrapper font-bold uppercase heading'>
              SWEEPSTAKES REWARDS #1 <br/> 
              Online Game Supplier
            </h1>
            <p className='text-center lg:text-lg md:text-base sm:text-sm text-xs leading-normal mt-6 paragraph'>
              Multiple Game Developers in One Shop, We Have Contest Games, Sweepstakes <br/>
              Games, Skill Based Games, & More. The Best Part Is We Have Tech Teams To<br/> 
              Support It All!
            </p>
            <div className='flex justify-center space-x-2 mt-8'>
              <button className='w-[167px] h-[33px] sm:w-[200px] sm:h-[47px] lg:w-[256px] lg:h-[70.14px] button-grad rounded-l-full'>
                Distribution
              </button>
              <button className='w-[256px] h-[70.14px] button-grad hidden xl:inline'>
                Distributors
              </button>
              <button className='w-[167px] h-[33px] sm:w-[200px] sm:h-[47px] lg:w-[256px] lg:h-[70.14px] button-grad rounded-r-full'>
                Store Agents
              </button>
            </div>
          </div>


        </div>

    </div>
  );
};

export default Hero;

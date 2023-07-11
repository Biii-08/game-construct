import React from 'react'
import Image from 'next/image'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='top-0 absolute w-full overflow-hidden ' id='navbar'>
      <div className='flex gap-[98px] image'>
        
        
        <div className='flex flex-start ml-[41px] sm:mt-[44px] mt-0' >
            <img
            src ='/assets/image/logo.png' 
            alt='logo'
            className='w-[249.33px] h-[143.56px] logo'
            />
        </div>

        <div className=' sm:hidden lg:block md:hidden listed' >
          <ul className='flex flex-row gap-[48px] mt-[106.5px] sm:text-[22px] text-[18px] navs'> 
            <li> All games </li>
            <li> Startup Guide </li>
            <li> Legal Guide </li>
            <li> FAQ</li>
            <li> About Us</li>
            <li> Contact </li>
          </ul>
        </div>

        <div className='flex items-center gap-[29px] absolute right-[69px] top-[45px] host'>
                   <button className="w-[154.448px] h-[41.719px] button-grad mr-[20px] hidden xl:inline rounded-l-full ">
                      Distributors
                    </button>
                    <button className="w-[154.448px] h-[41.719px] button-grad mr-[250px] rounded-r-full">
                      Store Agents
                    </button>
            <p className='md:text-[15px] sm:text-[10px] lg:text-[35px]'>+1(833) 767 -HOST</p>
            <div className='gap-[24px] flex flex-row icons'>
              <img src='/assets/image/arrow.png' className='w-[72.28px] ' />
              <img src='/assets/image/call.png' className='w-[72.28px] '  />
            </div>
        </div>

        <div className=' sm:block md:hidden cursor-pointer hover:scale-110 ease-in duration-300 mt-16 mr-8 h-[40px] menu'> 
          <Image 
              src='/assets/image/Hamburger.png'
              width={40}
              height={30}
              alt='menu'
              className='absolute right-0'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
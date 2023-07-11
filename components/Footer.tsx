import React from 'react'
import '../styles/footer.css'
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';

const footer = () => {
  return (
    <div className='c-border  '>
        <div className='flex lg:flex-row flex-col gap-[133px] justify-center  mt-[42px] '>

            <div className='flex flex-col'>
               <h1 className='game'>GAME</h1>
               <h1 className='construct'>CONSTRUCT</h1>
               <div className='flex flex-row gap-[10.6px] mt-[32px]'>
               <img
                  src='/assets/image/phone.png'
                  alt='call'
                  className='w-[21.333px] h-[21.333px]'
                />
               <p>Call Us: +1 (855) 908-HOST</p>
               </div>
            </div>

            <div className='flex flex-col gap-[10px]'>
              <h3>All Games</h3>
              <ul className='list' >
                <li>Mobile Games</li>
                <li>Mobile Skill Games</li>
                <li>Fish Game Systems</li>
                <li>BSG Competition Games</li>
                <li>IGS Fish Game System</li>
              </ul>
            </div>

            <p>Startup Guide</p>
            <p>Legal Guide</p>
            <p>About Us</p>
            <p>Contact</p>

        </div>

        <div className='flex lg:flex-row flex-col justify-center gap-[74.67px] mt-[64px] mb-[64px]'>
          <img
           src="/assets/image/amoa.png" 
           alt="amoa logo" 
           className=' w-[154.667px] h-[64px] '
          />
          <img
           src="/assets/image/bmm.png" 
           alt="bmm logo" 
           className=' w-[73.333px] h-[74.667px] '
          />
          <img
           src="/assets/image/tick.png" 
           alt="gaming labs certified" 
           className=' w-[158.667px] h-[54px] '
          />
          <img
           src="/assets/image/n.png" 
           alt="n logo" 
           className='w-[112px] h-[106px]'
          />

        </div>
 
        <div className='flex lg:flex-row flex-col justify-center  w-auto'>
          <div className='c-border-2 w-auto flex lg:flex-row flex-col justify-between'>
            <ul  className='flex lg:flex-row flex-col gap-[42.67px] mt-[42.67px] mb-[42.67px] ' >
              <li>Terms Of Use</li>
              <li>How It Works</li>
              <li>Getting Started</li>
              <li>Order Process</li>
              <li>Make Contact</li>
              <li>The Layout</li>
              <li>Legal Regulations</li>
              <li>Privacy policy</li>
              <li>Privacy policy</li>
            </ul>
          
           <div className='flex flex-row mt-[42.67px] gap-[16px]'>
              <BsFacebook size={27}/>
              <BsInstagram size={27}/>
              <BsTwitter size={27}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default footer
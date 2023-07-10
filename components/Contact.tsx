import React from 'react'
import '../styles/contact.css';
const contact = () => {
  return (
    <div className='  mb-[537px]'>
      <div className='flex flex-col items-center'> 
            <h1 className='text-[42.667px] text-center heading mt-[91px]'>Contact Us</h1>
            <p className='text-center mt-[10px]'>Any Question or Remarks? Just message us</p> 
        </div>

        <div className='flex flex-row gap-[273px] mt-[109px]  justify-center'>
                  
              <div>
                <img src='/assets/image/contactus.png'
                    alt='person working'
                    className='w-[739.659px] h-[ 588.132px]' 
                />     
              </div>   
         

          <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
                className='form'
              >
                <div className=' flex flex-col gap-1 w-full p-[32px]'>
                  
                    <label className=' text-[21.333px]'>
                        Name <span className='text-[#15BFFD]'>*</span>
                    </label>
                    <input
                      className=' customborder rounded-[5.333px] h-[52px] w-[674px] mb-[32px] flex bg-transparent p-6 '
                      type='text'
                      name='name'
                    />
                 
                    <label className=' text-[21.333px] '>
                      Phone Number <span className='text-[#15BFFD]'>*</span>
                    </label>
                    <input
                      className='customborder rounded-lg h-[52px] mb-[32px]  flex bg-transparent p-6 '
                      type='text'
                      name='phone'
                    />
                  
               
                  <label className=' text-[21.333px]'>
                      Email <span className='text-[#15BFFD]'>*</span></label>
                  <input
                    className='customborder rounded-lg h-[52px] flex  mb-[32px]  bg-transparent p-6 '
                    type='email'
                    name='email'
                  />
               
                  <label className=' text-[21.333px] '> 
                      Message <span className='text-[#15BFFD]'>*</span></label>
                  <textarea
                    className='customborder rounded-lg h-[106px]   mb-[32px] bg-transparent p-6 '
                    name='message'
                  >
                  </textarea>
                
                  <button className=' text-gray-100 gradient-button h-[63px]'>
                    Send Message
                  </button>

                  </div>
              </form>
        </div>
    </div>
  )
}

export default contact
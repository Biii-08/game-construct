import React from 'react';
import Hero from '../pages/Hero';
import Navbar from '@/components/Navbar';
import Carasoul from '../pages/Carasoul';
import Games from '../pages/Games';
import Authentic from '../pages/Authentic';
import Grow from '../pages/Grow';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import '../styles/globals.css';

const Page = () => {
  return (
    <div className='bg-[#0B0620]'>
      <Hero />
      <Navbar />
      
      <Carasoul />
      <div className='relative'>
      <div className='relative'>
      <div className='gradient-02 z-0'/>
      <Games/>
      </div>
      <div className='gradient-01 z-0'/>
      <Authentic />
      </div>
      <Grow />
      <div className='relative'>
      <div className='gradient-02 z-0'/>
      <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Page;

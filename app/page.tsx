import React from 'react';
import Hero from '../components/Hero';
import Navbar from '@/components/Navbar';
import Carasoul from '../components/Carasoul';
import Games from '../components/Games';
import Authentic from '../components/Authentic';
import Grow from '../components/Grow';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/globals.css';

const Page = () => {
  return (
    <div className='bg-[#0B0620]'>
      <Hero />
      <Navbar />
      
      <Carasoul />
      <div className='relative'>
     
      <Games/>
      <div className='gradient-01 z-0'/>
     
      <Authentic />
      </div>
      <Grow />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;

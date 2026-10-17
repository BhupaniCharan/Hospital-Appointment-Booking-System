import React from 'react'
import { assets } from '../assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-primary rounded-lg px-6 md:px-10 lg:px-30 mt-24'>
      
      {/* Left Section: Text + Button */}
      <div className='md:w-1/2 flex flex-col gap-6 py-10 text-white'>

        {/* Main heading */}
        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight'>
          Book Appointment<br />With Trusted Doctors
        </p>

        {/* Group image + supporting text */}
        <div className='flex items-center gap-3'>
          <img src={assets.group_profiles} alt="profiles" className='w-16 h-16 object-contain' />
          <p className='text-sm md:text-base'>Simply browse through our extensive list of trusted doctors.</p>
        </div>

        {/* Book appointment button */}
        <a href="#speciality" className='flex items-center gap-2 bg-white text-primary font-medium w-fit px-6 py-2 rounded-full hover:scale-105 transition-all duration-300'>
          Book Appointment
          <img src={assets.arrow_icon} alt="arrow" className='w-4 h-4' />
        </a>
      </div>

      {/* Right Section: Header Image */}
      <div className='md:w-1/2 mt-10 md:mt-0'>
        <img src={assets.header_img} alt="Header" className='w-full h-auto rounded-lg object-contain' />
      </div>
      

    </div>
    
       
  );
};

export default Header;

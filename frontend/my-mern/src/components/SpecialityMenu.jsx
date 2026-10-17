import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets';

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800 '>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors, schedule your appointments.
      </p>

      <div className='flex sm:justify-center gap-4 pt-5 w-full '>
        {specialityData.map((item, index) => (
          <Link key={index} to={`/doctors/${item.speciality}`} className=''>
            <img src={item.image} alt={item.speciality} className='' />
            <p className=''>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu;

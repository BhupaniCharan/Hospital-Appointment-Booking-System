import React from 'react';
import { doctorsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const TopDoctors = () => {
 const navigate=useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-center sm:w-1/3 text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-5 px-3 sm:px-0">
        {doctorsData.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)}
            key={index}
            
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="bg-blue-50 w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p>Available</p>
              </div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600 mt-1">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {navigate('/doctors');scrollTo(0,0)}}
        className="mt-8 px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
      >
        View All Doctors
      </button>
    </div>
  );
};

export default TopDoctors;

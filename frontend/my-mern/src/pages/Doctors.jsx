import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setfilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setfilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className='flex gap-6 mt-10'>

      {/* LEFT SIDE FILTER MENU */}
<div className='w-full md:w-1/4 lg:w-1/5 bg-white shadow-md rounded-lg p-5 h-fit'>
  <h2 className='text-xl font-semibold text-gray-800 mb-4 border-b pb-2'>Specialities</h2>
  <div className='flex flex-col gap-3 text-gray-600 text-sm'>
    <p onClick={() => navigate('/doctors/General physician')} className='cursor-pointer hover:text-primary transition-all'>➤ General Physician</p>
    <p onClick={() => navigate('/doctors/Gynecologist')} className='cursor-pointer hover:text-primary transition-all'>➤ Gynecologist</p>
    <p onClick={() => navigate('/doctors/Dermatologist')} className='cursor-pointer hover:text-primary transition-all'>➤ Dermatologist</p>
    <p onClick={() => navigate('/doctors/Pediatricians')} className='cursor-pointer hover:text-primary transition-all'>➤ Pediatricians</p>
    <p onClick={() => navigate('/doctors/Neurologist')} className='cursor-pointer hover:text-primary transition-all'>➤ Neurologist</p>
    <p onClick={() => navigate('/doctors/Gastroenterologist')} className='cursor-pointer hover:text-primary transition-all'>➤ Gastroenterologist</p>
  </div>
</div>

      {/* RIGHT SIDE DOCTOR CARDS */}
      <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
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
          ))
        }
      </div>
    </div>
  );
};

export default Doctors;

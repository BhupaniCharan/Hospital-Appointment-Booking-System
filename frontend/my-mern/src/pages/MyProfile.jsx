import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const { userData, setUserData,token,backendUrl,loadUserProfileData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

 // Debug log
 const updateUserProfileData=async()=>{
 try{
  const formData=new FormData()
  formData.append('name',userData.name)
   formData.append('phone',userData.phone)
    formData.append('address',JSON.stringify(userData.address))
     formData.append('gender',userData.gender)
      formData.append('dob',userData.dob)

      const {data}=await axios.post(backendUrl+ '/api/user/update-profile',formData,{headers:{token}})
      if(data.success){
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)

      }
      else{
        toast.error(data.message)
      }
 }
 catch(error){
   console.log(error)
   toast.error(error)
 }
 }

  return userData && (
    <div className="p-4 space-y-4 text-gray-800">
      <div className="flex items-center justify-between">
        <img
          src={userData.image ? userData.image : assets.profile_pic}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
      </div>

      {
      isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
          className="border px-2 py-1 rounded"
        />
      ) : (
        <p className="font-semibold text-lg">{userData.name}</p>
      )}

      <hr />

      <div>
        <p className="font-semibold mb-1 underline ">CONTACT INFORMATION</p>
        <div className="space-y-2">
          <p>Email id:</p>
          <p>{userData.email}</p>

          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
              className="border px-2 py-1 rounded"
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p>Address:</p>
          {isEdit ? (
            <div className="space-y-1">
              <input
                type="text"
                value={userData.address?.line1 || ''}
                onChange={e =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                className="border px-2 py-1 rounded w-full"
              />
              <input
                type="text"
                value={userData.address?.line2 || ''}
                onChange={e =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                className="border px-2 py-1 rounded w-full"
              />
            </div>
          ) : (
            <p>
              {userData.address?.line1}
              <br />
              {userData.address?.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="font-semibold mb-1 underline ">BASIC INFORMATION</p>
        <div className="space-y-2">
          <p>Gender:</p>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
              className="border px-2 py-1 rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p>Birthday:</p>{isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
              className="border px-2 py-1 rounded"
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit
          ?<button className="px-8 py-2 text-sm text-white border bg-primary rounded-full hover:bg-primary hover:text-white transition-all"onClick={updateUserProfileData}>Save Information</button>
          :<button className="px-8 py-2 text-sm text-white border bg-primary rounded-full hover:bg-primary hover:text-white transition-all"onClick={() => setIsEdit(true)}>Edit</button>
      
}
    </div>
    </div>
  )
}

export default MyProfile;
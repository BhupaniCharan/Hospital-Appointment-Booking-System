import React from 'react';
import { assets } from '../assets';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-4 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">About Us</h1>

      <p className="mb-4 text-center text-gray-600 text-sm sm:text-base">
        Welcome to our doctor appointment booking platform. We are committed to connecting patients
        with highly qualified and experienced doctors across various specialties.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mt-14"> {/* Increased top margin here */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
            <li>Instant appointment booking with top-rated doctors</li>
            <li>Secure and user-friendly platform</li>
            <li>Doctors from diverse specialties across locations</li>
            <li>Easy cancellation and rescheduling</li>
            <li>Transparent profiles with reviews and experience</li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.about_image}
            alt="Our Team"
            className="rounded-lg shadow-md w-64 sm:w-72 md:w-80 object-cover"
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          To make quality healthcare accessible to everyone by leveraging technology to simplify
          and streamline the process of finding the right doctor and booking appointments from
          anywhere, anytime.
        </p>
      </div>
    </div>
  );
};

export default About;

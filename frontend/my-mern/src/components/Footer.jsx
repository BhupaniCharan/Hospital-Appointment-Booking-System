import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-4 sm:px-10 py-6 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-6">

        {/* Brand Info */}
        <div className="md:w-1/3">
          <h2 className="text-lg font-semibold mb-2">CareConnect</h2>
          <p className="leading-relaxed">
            Trusted appointments with top doctors. Simple, secure, and fast.
          </p>
        </div>

        {/* Navigation Links - single row */}
        <div className="flex flex-col md:flex-row gap-2 md:items-start">
          <h3 className="font-semibold mb-1 md:mb-0 md:mr-4">Quick Links:</h3>
          <div className="flex gap-4 flex-wrap">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/doctors" className="hover:underline">Doctors</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:support@careconnect.com" className="hover:underline">support@careconnect.com</a></li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Tirupati, India</li>
          </ul>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      <p className="text-center">&copy; {new Date().getFullYear()} CareConnect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

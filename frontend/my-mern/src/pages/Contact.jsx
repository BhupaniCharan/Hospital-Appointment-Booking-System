import React from "react";
import { assets } from "../assets"; // adjust path as needed

const Contact = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-4 sm:px-10 md:px-20 py-16">
      
      {/* 📝 Contact Info Section */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Contact Us</h2>
        <p className="text-gray-600 text-sm mb-6">
          We’d love to hear from you. Reach out to us anytime using the details below.
        </p>

        <div className="space-y-3 text-gray-700">
          <p><span className="font-semibold text-primary">📍 Address:</span> 123 Coffee Street, Tirupati, India</p>
          <p><span className="font-semibold text-primary">📞 Phone:</span> +91 98765 43210</p>
          <p><span className="font-semibold text-primary">✉️ Email:</span> contact@coffeetime.com</p>
          <p><span className="font-semibold text-primary">🕒 Working Hours:</span> Mon–Sat, 9:00 AM – 8:00 PM</p>
        </div>
      </div>

      {/* 📷 Contact Image */}
      <div className="w-full md:w-1/2">
        <img
          src={assets.con_img}
          alt="Contact Illustration"
          className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default Contact;

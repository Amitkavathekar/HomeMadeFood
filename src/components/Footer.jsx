import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div>
      <footer className='bg-white mt-10 text-gray-800 font-sans px-4 lg:px-16'>
       

        <div className='flex flex-col md:flex-row justify-between gap-10 py-10'>
          {/* Left - About */}
          <div className='md:w-[30%] text-center md:text-left'>
            <img
              src='/src/assets/images/30.png'
              alt='MealAwe Logo'
              className='w-64 h-auto mx-auto md:mx-0 mb-4'
            />
            <p className='text-gray-600 text-base mb-4'>
              We at Mealawe bring in technology and solutions for building a
              healthy society by delivering the best homemade food from nearby
              home chefs.
            </p>
            <div className='flex justify-center md:justify-start gap-4 text-xl'>
              <FaFacebookF className='hover:text-green-600 cursor-pointer transition' />
              <FaInstagram className='hover:text-green-600 cursor-pointer transition' />
              <FaYoutube className='hover:text-green-600 cursor-pointer transition' />
              <FaLinkedinIn className='hover:text-green-600 cursor-pointer transition' />
            </div>
          </div>

          {/* Company */}
          <div className='text-center md:text-left'>
            <h4 className='font-semibold text-lg mb-4'>Company</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              {['About us', 'Why us', 'Join Us', 'Careers', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <a href='#' className='hover:text-green-600 transition'>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Information */}
          <div className='text-center md:text-left'>
            <h4 className='font-semibold text-lg mb-4'>Information</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              {[
                'Privacy Policy',
                'Terms & Conditions',
                'Cancellation & Refunds',
                'Blogs',
              ].map((item) => (
                <li key={item}>
                  <a href='#' className='hover:text-green-600 transition'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='text-center md:text-left'>
            <h4 className='font-semibold text-lg mb-4'>Contact Us</h4>
            <p className='text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2 mb-2'>
              <FaPhoneAlt className='text-green-600' /> +91-9665 888 488
            </p>
            <p className='text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2'>
              <MdEmail className='text-green-600' /> help@mealawe.com
            </p>
          </div>
        </div>

        {/* ---------- Footer Bottom ---------- */}
        <div className='border-t border-gray-300 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
          <p>
            Yagy Tech Pvt Ltd (Formerly Known as Climbing Seeds Pvt Ltd). 2025
            All rights reserved
          </p>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <img
              src='/src/assets/images/22.png'
              className='h-8'
              alt='App Store'
            />
            <img
              src='/src/assets/images/23.png'
              className='h-8'
              alt='Play Store'
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import Button from './Button';
import { LiaSearchSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi'; // for hamburger

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // toggle for mobile menu

  return (
    <div className="w-full bg-white shadow-xl text-gray-600">
      <div className="flex justify-between items-center px-6 py-3 lg:py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            style={{ width: '180px', height: '45px' }}
            src="/images/logo.png"
            alt="Logo"
            className="object-contain"
          />
        </Link>

        {/* Hamburger icon for small screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none text-gray-700"
          >
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Main Menu (Desktop + Tablet) */}
        <div
          className={`flex-col lg:flex-row lg:flex lg:items-center gap-6 text-xl font-medium transition-all duration-300 ease-in-out
          ${isOpen ? 'flex mt-4' : 'hidden'} lg:mt-0`}
        >
          {/* About Us Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center items-center gap-x-1.5 rounded-md px-3 py-2 hover:bg-gray-100 border-none outline-none">
              About Us
              <svg
                viewBox="0 0 20 20"
                fill="black"
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              >
                <path
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-black/10 focus:outline-none z-50">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/whyus"
                      className={`block px-4 py-2 text-sm ${
                        active ? 'bg-gray-100 text-gray-500' : 'text-black'
                      }`}
                    >
                      Why Us
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/blog"
                      className={`block px-4 py-2 text-sm ${
                        active ? 'bg-gray-100 text-gray-500' : 'text-black'
                      }`}
                    >
                      Blog
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profiletest"
                      className={`block px-4 py-2 text-sm ${
                        active ? 'bg-gray-100 text-gray-500' : 'text-black'
                      }`}
                    >
                      Profile Tests
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          {/* Tiffin Services Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center items-center gap-x-1.5 rounded-md px-3 py-2 hover:bg-gray-100 border-none outline-none">
              Tiffin Services
              <svg
                viewBox="0 0 20 20"
                fill="black"
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              >
                <path
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-52 origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-black/10 focus:outline-none z-50">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/TiffinServiceInpune"
                      className={`block px-4 py-2 text-sm ${
                        active ? 'bg-gray-100 text-gray-500' : 'text-black'
                      }`}
                    >
                      Tiffin Services in Pune
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/TiffinServiceInBenglore"
                      className={`block px-4 py-2 text-sm ${
                        active ? 'bg-gray-100 text-gray-500' : 'text-black'
                      }`}
                    >
                      Tiffin Services in Benglore
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/TiffinServiceInKota"
                      className={`block px-4 py-2 text-sm ${
                        active ? 'bg-gray-100 text-gray-500' : 'text-black'
                      }`}
                    >
                      Tiffin Services in Kota
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          {/* Static Links */}
          <Link
            to="/forcorporates"
            className="hover:text-blue-500 transition-colors"
          >
            For Corporates
          </Link>
          <Link to="/joinus" className="hover:text-blue-500 transition-colors">
            Join Us
          </Link>
          <Link
            to="/contactus"
            className="hover:text-blue-500 transition-colors"
          >
            Contact Us
          </Link>

          {/* Search Icon */}
          <div className="text-2xl hover:text-blue-500 cursor-pointer">
            <LiaSearchSolid />
          </div>

          {/* Order Now Button for small screens (inside dropdown) */}
          <div className="lg:hidden mt-3">
            <Link to="/signup">
              <Button
                className="w-full h-12 rounded-3xl text-xl text-white font-bold hover:opacity-90 transition"
                style={{ backgroundColor: '#63AB45' }}
                label="Order Now"
              />
            </Link>
          </div>
        </div>

        {/* Order Now Button (Desktop) */}
        <div className="hidden lg:block">
          <Link to="/signup">
            <Button
              className="w-44 h-12 rounded-3xl text-2xl text-white font-bold hover:opacity-90 transition"
              style={{ backgroundColor: '#63AB45' }}
              label="Order Now"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Menu } from "@headlessui/react";
import Button from "./Button";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import JoinUs from "../pages/JoinUs";
import WhyUs from "../pages/WhyUs";
import TiffinServiceInpune from "../pages/TiffinServiceInpune";
import TiffinServiceInBenglore from "../pages/TiffinServiceInBenglore";
import TiffinServiceInKota from "../pages/TiffinServiceInKota";
import SignUp from "../pages/SignUp";

const Navbar = () => {
  return (
    <div className="w-full gap-15 text-gray-600  h-25 flex justify-evenly items-center px-6 bg-white     shadow-xl ">
      <div className="flex gap-10">
        <Link to="/" className="hover:text-blue-500">
          <img
            style={{ width: "200px", height: "50px" }}
            src="/images/logo.png"
            alt="Logo"
          />
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 text-bold shadow-gray-900 text-xl font-medium">
          {/* About Us Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-xl hover:bg-white/20 border-none outline-none">
              About Us
              <svg
                viewBox="0 0 20 20"
                fill="black"
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400">
                <path
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-white/10 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/whyus"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-500" : "text-black"
                      }`}>
                      Why Us
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/blog"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-500" : "text-black"
                      }`}>
                      Blog
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profiletest"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-500" : "text-black"
                      }`}>
                      Profile Tests
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-xl hover:bg-white/20 border-none outline-none">
              Tiffin services
              <svg
                viewBox="0 0 20 20"
                fill="black"
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400">
                <path
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-white/10 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/TiffinServiceInpune"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-500" : "text-black"
                      }`}>
                      Tiffin services in pune
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/TiffinServiceInBenglore"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-500" : "text-black"
                      }`}>
                      Tiffin services in Benglore
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/TiffinServiceInKota"
                      className={`block px-4 py-2 text-sm ${
                        active ? "bg-gray-100 text-gray-500" : "text-black"
                      }`}>
                      Tiffin services in kota
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          {/* Other Links */}
          <Link to="/forcorporates">For Corporates</Link>
          <Link to="/joinus">Join Us</Link>
          <Link to="/contactus">Contact Us</Link>
          <LiaSearchSolid />
        </div>
      </div>

      {/* Order Now Button */}
      <Link to="/signup">
        <Button
          className="w-75 h-12 rounded-3xl text-2xl text-white font-bold hover:opacity-90 transition"
          style={{ backgroundColor: "#63AB45" }}
          label="Order Now"
        />
      </Link>
    </div>
  );
};

export default Navbar;

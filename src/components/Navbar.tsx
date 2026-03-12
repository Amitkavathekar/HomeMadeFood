import React, { useState } from "react";
import Button from "./Button";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-white shadow-xl text-gray-600">
      <div className="flex justify-between items-center px-6 py-3 lg:py-4">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            style={{ width: "180px", height: "45px" }}
            src="/images/logo.png"
            alt="Logo"
            className="object-contain"
          />
        </Link>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-700"
          >
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`flex-col lg:flex-row lg:flex lg:items-center gap-6 text-xl font-medium transition-all duration-300
          ${
            isOpen
              ? "flex absolute top-20 left-0 w-full bg-white shadow-md p-6 z-50 flex-col items-center text-center"
              : "hidden"
          } lg:static lg:mt-0 lg:shadow-none lg:p-0 lg:items-center lg:text-left`}
        >

          {/* About Us Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 py-2 hover:bg-gray-100 rounded-md">
                About Us
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48">

              <DropdownMenuItem asChild>
                <Link to="/whyus">Why Us</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/blog">Blog</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/career">Career</Link>
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tiffin Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 py-2 hover:bg-gray-100 rounded-md">
                Tiffin Services
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">

              <DropdownMenuItem asChild>
                <Link to="/TiffinServiceInpune">
                  Tiffin Services in Pune
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/TiffinServiceInBenglore">
                  Tiffin Services in Benglore
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/TiffinServiceInKota">
                  Tiffin Services in Kota
                </Link>
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>

          {/* Static Links */}
          <Link
            to="/forcorporates"
            className="hover:text-blue-500 transition-colors"
          >
            For Corporates
          </Link>

          <Link
            to="/joinus"
            className="hover:text-blue-500 transition-colors"
          >
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

          {/* Mobile Button */}
          <div className="lg:hidden mt-3">
            <Link to="/signup">
              <Button
                className="w-full h-12 rounded-3xl text-xl text-white font-bold hover:opacity-90 transition"
                style={{ backgroundColor: "#63AB45" }}
                label="Order Now"
              />
            </Link>
          </div>

        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link to="/signup">
            <Button
              className="w-44 h-12 rounded-3xl text-2xl text-white font-bold hover:opacity-90 transition"
              style={{ backgroundColor: "#63AB45" }}
              label="Order Now"
            />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
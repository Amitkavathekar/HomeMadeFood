import React from 'react';
import vector1 from '../assets/images//Vector-1.png';
import isolate from '../assets/images/Isolation_Mode.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Cardhome from '../components/Cardhome';

import SignUp from './../pages/SignUp';
import StepsCompoent from '../components/StepsCompoent';
import StepsCompoentReverse from '../components/StepsCompoentReverse';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const blogPosts = [
  {
    id: 1,
    title: 'Indian Spices Health Benefits',
    author: 'Mealawve Admin',
    date: 'Jan 22, 2023',
    category: 'People Health',
    description:
      'Indian spices are also known for their medicinal properties, such as antibiotic, boost metabolism, antioxidants, & ability to preserve food',
    image: '/src/assets/images/10.jpg', // replace with your image path
  },
  {
    id: 2,
    title: 'Do I Need a License to Sell Homemade Food?',
    author: 'Mealawve Admin',
    date: 'Jan 21, 2023',
    category: 'Company',
    description:
      'An FSSAI food license is essential to run food business in India. It is even critical for F&B operators making less than Rs 12 Lakh annually',
    image: '/src/assets/images/12.jpg',
  },
  {
    id: 3,
    title: 'How to Start a Tiffin Service from Home?',
    author: 'Mealawve Admin',
    date: 'Jan 21, 2023',
    category: 'Women Power',
    description:
      'Some of the guidelines on how to start a tiffin service from home are obtaining FSSAI license, plan for dishes, register on mealawve, etc.',
    image: '/src/assets/images/11.jpg',
  },
];

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section className='flex h-150 w-full justify-between  mt-7 '>
        <div
          className='h-[550px] w-[720px] bg-contain bg-no-repeat'
          style={{
            backgroundImage: `url(${vector1})`,
          }}
        >
          <div className=' ml-40 mt-20  h-120 w-140'>
            <p className='text-7xl font-bold'>100%</p>
            <p className='text-7xl font-bold text-[#63AB45]'>Homemade</p>
            <p className='text-7xl font-bold'>Food is</p>
            <p className='text-6xl font '>Waiting For You</p>
            <p className='text-xl  mt-2'>
              You can get the best homemade food from your neighbourhood homes.
              The food will be full of soul, health, & taste.
            </p>
            <Link to='/signup'>
              <Button
                className='w-65 mt-10 h-12 rounded-3xl text-2xl text-white hover:opacity-90 transition'
                style={{
                  backgroundColor: '#63AB45',
                }}
                label='Order Now'
              />
            </Link>
          </div>
        </div>
        <div
          className='h-[600px] w-[630px]  bg-cover bg-no-repeat'
          style={{
            backgroundImage: `url(${isolate})`,
          }}
        >
          <img
            className='h-148 w-135'
            src='/src/assets/images/thali.webp'
            alt=''
          />
        </div>
      </section>

      {/* Features section */}
      <section className=' h-150 mt-10  w-full '>
        <div className='w-[75%]  m-auto  h-[100%]'>
          <p className=' flex text-4xl'>
            <span className='m-auto font-bold '>
              We DO NOT serve food from{' '}
              <span className=' text-[#E2394D]'>Restaurants!</span>
            </span>
          </p>

          <div className='flex justify-evenly gap-6'>
            <Cardhome
              heading='Mealawe Application'
              label='Download Mealawe app from iOS or Playstore. No manual process; download, signup & place a homemade food order.'
              src='/src/assets/images/mobile.webp'
            />
            <Cardhome
              heading='No Restaurant'
              label='Home – made food served from nearby family kitchens. They are families like yours. We do not partner with restaurants or dhaba.'
              src='/src/assets/images/girlwiththali.webp'
            />
            <Cardhome
              heading='Reliable Home Delivery'
              label='We have a reliable door-to-door delivery. You can even place advance or subscription food orders. Our delivery takes care of the rest.'
              src='/src/assets/images/delivery-boy.webp'
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='h-70 w-full'>
        <div className='w-full flex justify-center items-center py-12 px-6 bg-white'>
          <div className='max-w-3xl text-center'>
            <h2 className='text-4xl font-bold mb-4'>
              <span className='text-[#63AB45]'>Why Us?</span> – Because you are
              very
              <span className='block text-[#63AB45]'>Special!</span>
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed'>
              You will have every reason to count on us for healthy & tasty
              homemade food from nearby family kitchens. You will find a
              different concept & flavour while ordering home food from Mealawe.
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className='h-480  flex justify-between  w-full'>
        <div className='h-195 bg-contain  w-[45%]'>
          <img src='/src/assets/images/imgi_6_ui-elements-01 (1).webp' alt='' />
          <div className='mt-5 flex justify-end'>
            <div className='flex flex-col'>
              <p className='text-[#63AB45] w-60 text-6xl'>Advance Order</p>
              <p className='text-3xl w-80'>
                You can order your choice of homemade food in advance for up to
                2 days. Now you can plan for a perfect weekend
              </p>
            </div>
          </div>

          <img
            className='h-195 bg-contain  mt-10 w-full'
            src='/src/assets/images/3.webp'
            alt=''
          />
        </div>

        <div className=' h-470 w-[45%]'>
          <div className='mt-35'>
            <p className='text-[#63AB45]  w-90 text-6xl'>All Day Order</p>
            <p className='text-3xl w-80'>
              Instant homemade food order during breakfast, lunch, high tea and
              dinne
            </p>
          </div>
          <div className='h-195 bg-contain  mt-30 w-full '>
            <img className='' src='/src/assets/images/2.webp' alt='' />
          </div>
          <div className='mt-30'>
            <p className='text-[#63AB45]  w-110 text-6xl'>Regional Snacks</p>
            <p className='text-3xl w-80'>
              You can order a variety of your choice regional snacks such as
              pickles, papad, sweets, any side snacks, etc.
            </p>
          </div>
        </div>
      </section>

      <p className='w-full text-5xl text-center text-[#63AB45] font-bold'>
        Order in 4 simple steps
      </p>

      {/* Order in 4 simple steps */}
      <section className='h-170 w-full '>
        <div className='w-[90%] m-auto mt-10 flex justify-between '>
          <StepsCompoent
            heading='Download Mealawe App'
            label='Download Mealawe app from iOS or Playstore. An app that has got all the traditional and regional flavours of India.'
            src='/src/assets/images/4.webp'
          />
          <StepsCompoentReverse
            heading='Create Your Account
  '
            label='Create your profile with the help of your mobile number. Set your email and cuisine preferences and you are good to go.

  '
            src='/src/assets/images/5.webp'
          />
          <StepsCompoent
            heading='Order Homemade Food
  '
            label='You can choose homemade food from a variety of cuisine. You can place daily as well as advance order.'
            src='/src/assets/images/6.webp'
          />
          <StepsCompoentReverse
            heading='Food Delivery in Minutes'
            label='You will get the homemade food delivered at your home, office, or anywhere else in no time.'
            src='/src/assets/images/7.webp'
          />
        </div>
      </section>

      {/* Be the “Mealawian” Your Way! */}
      <div className='w-full flex flex-col justify-center items-center  mt-25 h-175'>
        <div className='w-[38%] m-auto! h-40 flex flex-col justify-center items-center text-center'>
          <p className=' text-[#65AC48] text-4xl font-bold'>
            Be the “Mealawian” Your Way!
          </p>
          <p className='font-serif'>
            You will experience an unmatched and unique online homemade food
            ordering system that can get food delivered which is nowhere less
            than your own homemade food
          </p>
        </div>

        <div className='h-160 mt-10 w-full flex justify-center items-center'>
          <img
            height={500}
            width={550}
            src='/src/assets/images/8.webp'
            alt=''
          />
          <div className='w-[40%] flex flex-col items-center justify-center text-center p-6'>
            <h2 className='text-3xl font-bold text-[#63AB45] underline mb-2'>
              JOIN AS A CUSTOMER
            </h2>

            <h3 className='text-2xl font-semibold text-[#63AB45] mb-4'>
              Order your choice of homemade food right away
            </h3>

            <p className='text-gray-700 max-w-2xl mb-6'>
              You can get the best homemade food within no time. You can place
              online food orders on the go. Also you can place advance orders of
              food items
            </p>

            <div className='flex gap-4'>
              <a href='#'>
                <img
                  src='/src/assets/images/22.png'
                  alt='Download on the App Store'
                  className='h-12'
                />
              </a>
              <a href='#'>
                <img
                  src='/src/assets/images/23.png'
                  alt='Download on the App Store'
                  className='h-12'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='h-160 w-full flex justify-center items-center'>
        <div className='w-[40%] flex flex-col items-center justify-center text-center p-6'>
          <h2 className='text-3xl font-bold text-[#63AB45] underline mb-2'>
            JOIN AS A CUSTOMER
          </h2>

          <h3 className='text-2xl font-semibold text-[#63AB45] mb-4'>
            Order your choice of homemade food right away
          </h3>

          <p className='text-gray-700 max-w-2xl mb-6'>
            You can get the best homemade food within no time. You can place
            online food orders on the go. Also you can place advance orders of
            food items
          </p>

          <div className='flex gap-4'>
            <a href='#'>
              <img
                src='/src/assets/images/22.png'
                alt='Download on the App Store'
                className='h-12'
              />
            </a>
            <a href='#'>
              <img
                src='/src/assets/images/23.png'
                alt='Download on the App Store'
                className='h-12'
              />
            </a>
          </div>
        </div>
        <img height={500} width={550} src='/src/assets/images/25.webp' alt='' />
      </div>

      <section className=" h-180 w-full bg-[url('/src/assets/images/9.webp')] bg-cover">
        <div className='w-full flex flex-col items-center justify-center text-center py-8'>
          <h2 className='text-4xl font-bold mb-4'>Blog</h2>
          <p className=' w-150 text-2xl mb-5'>
            Mealawian writers are too passionate about sharing our know-how on
            food. After all, we are food experts!!
          </p>

          {/* Button */}
          <button className='border border-[#63AB45] text-[#63AB45] font-semibold px-6 py-1 rounded-md hover:bg-[#63AB45] hover:text-white transition'>
            Read More
          </button>
        </div>

        <div className='w-full flex flex-col items-center'>
          <div className='flex flex-wrap justify-center gap-15'>
            {blogPosts.map((e) => (
              <div
                key={e.id}
                className='bg-white rounded-3xl shadow-xl overflow-hidden w-70'
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className='h-48 w-full object-cover'
                />

                <div className='p-4 text-left'>
                  <h3 className='font-semibold text-lg mb-2'>{e.title}</h3>
                  <p className='text-md text-gray-500 mb-2'>
                    {e.author} | {e.date} | {e.category}
                  </p>
                  <p className=' '>{e.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-between w-full max-w-6xl mt-6 px-6'>
            <a href='#' className='text-[#63AB45] text-sm hover:underline'>
              « Older Entries
            </a>
            <a href='#' className='text-[#63AB45] text-sm hover:underline'>
              Next Entries »
            </a>
          </div>
        </div>
      </section>

      <footer className='bg-white w-full mt-25 h-170 text-gray-800 font-sans'>
        <p className='text-4xl text-center font-bold'>As Seen In</p>

        <div className='w-full flex justify-center border-b border-gray-300 py-'>
          <div className='w-[80%] h-80 mt- flex flex-wrap justify-center gap-10 items-center'>
            <div className='w-50  flex items-center justify-center bg-white'>
              <img
                src='/src/assets/images/14.png'
                alt='Indian Express'
                className='w-full h-full object-contain'
              />
            </div>

            <div className='w-50 flex items-center justify-center bg-white'>
              <img
                src='/src/assets/images/15.webp'
                alt='Zee 24 Taas'
                className='w-full h-full object-contain'
              />
            </div>

            <div className='w-50 flex items-center justify-center bg-white'>
              <img
                src='/src/assets/images/16.svg'
                alt='Hindustan Times'
                className='w-full h-full object-contain'
              />
            </div>

            <div className='w-50 flex items-center justify-center bg-white'>
              <img
                src='/src/assets/images/17.png'
                alt='Pune Times Mirror'
                className='w-full h-full object-contain'
              />
            </div>

            <div className='w-50 flex items-center justify-center bg-white'>
              <img
                src='/src/assets/images/18.png'
                alt='Sakal'
                className='w-full h-full object-contain'
              />
            </div>

            <div className='w-50 flex items-center justify-center bg-white'>
              <img
                src='/src/assets/images/19.png'
                alt='Kesari'
                className='w-full h-full object-contain'
              />
            </div>

            <div className='w-50 flex items-center justify-center bg-white'>
              <img
                src='/src/assets/images/20.png'
                alt='Navbharat'
                className='w-full h-full object-contain'
              />
            </div>

            <div className='w-50 flex items-center justify-center bg-white'>
              <img
                src='/src/assets/images/19.png'
                alt='Navrashtra'
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>

        <div className='container h-75 m-auto max-w-11/12 flex flex-wrap justify-between gap-10 py-5 px-6 '>
          <div className='w-[30%]'>
            <img
              style={{
                width: '350px',
                height: '100px',
              }}
              src='/src/assets/images/30.png'
              alt='MealAwe Logo'
              className='h-12 mb-4'
            />
            <p className=' text-gray-600  text-xl mb-4'>
              We at Mealawe bring in technology and solutions for building a
              healthy society by delivering the best homemade food from nearby
              home chefs.
            </p>
            <div className='flex gap-4 text-lg text-gray-700'>
              <a href='#' className='hover:text-green-600'>
                <FaFacebookF />
              </a>
              <a href='#' className='hover:text-green-600'>
                <FaInstagram />
              </a>
              <a href='#' className='hover:text-green-600'>
                <FaYoutube />
              </a>
              <a href='#' className='hover:text-green-600'>
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h4 className='font-semibold text-xl mb-4'>Company</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-green-600'>
                  About us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-600'>
                  Why us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-600'>
                  Join Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-600'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-600'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className='font-semibold text-xl mb-4'>Information</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-green-600'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-600'>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-600'>
                  Cancellation & Refunds
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-600'>
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-xl mb-4'>Contact us</h4>
            <p className='text-sm text-gray-600 flex items-center gap-2 mb-2'>
              <FaPhoneAlt className='text-green-600' /> +91-9665 888 488
            </p>
            <p className='text-sm text-gray-600 flex items-center gap-2'>
              <MdEmail className='text-green-600' /> help@mealawe.com
            </p>
          </div>
        </div>

        <div className='border-t border-gray-300 py-4 px-6 md:px-16 flex flex-wrap justify-between items-center text-sm text-gray-500'>
          <p>
            Yagy Tech Pvt Ltd (Formerly Known as Climbing Seeds Pvt Ltd). 2025
            All rights reserved
          </p>
          <div className='flex  gap-4 mt-0'>
            <a href='#'>
              <img src='/src/assets/images/22.png' className='h-10' />
            </a>
            <a href='#'>
              <img src='/src/assets/images/23.png' className='h-10' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

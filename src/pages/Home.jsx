import React from 'react';
import vector1 from '../assets/images/Vector-1.png';
import isolate from '../assets/images/Isolation_Mode.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Cardhome from '../components/Cardhome';
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
    image: '/src/assets/images/10.jpg',
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
    <div className='w-full overflow-x-hidden'>
      {/* Hero Section */}
      <section className='flex flex-col lg:flex-row justify-between items-center mt-7 w-full'>
        {/* Left Content */}
        <div
          className='h-auto lg:h-[550px] w-full lg:w-[720px] bg-contain bg-no-repeat flex items-center justify-center'
          style={{ backgroundImage: `url(${vector1})` }}
        >
          <div className='ml-0 lg:ml-40 mt-10 lg:mt-20 text-center lg:text-left p-4'>
            <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              100%
            </p>
            <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#63AB45]'>
              Homemade
            </p>
            <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              Food is
            </p>
            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold'>
              Waiting For You
            </p>
            <p className='text-base sm:text-lg mt-3'>
              You can get the best homemade food from your neighbourhood homes.
              The food will be full of soul, health, & taste.
            </p>
            <Link to='/signup'>
              <Button
                className='w-48 sm:w-56 md:w-64 mt-6 sm:mt-8 h-12 rounded-3xl text-lg sm:text-xl text-white hover:opacity-90 transition'
                style={{ backgroundColor: '#63AB45' }}
                label='Order Now'
              />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div
          className='h-[400px] sm:h-[500px] lg:h-[600px] w-full lg:w-[630px] bg-cover bg-no-repeat flex justify-center items-center'
          style={{ backgroundImage: `url(${isolate})` }}
        >
          <img
            className='h-[300px] sm:h-[420px] lg:h-148 w-auto'
            src='/src/assets/images/thali.webp'
            alt='Thali'
          />
        </div>
      </section>

      {/* Features Section */}
      <section className='mt-10 w-full'>
        <div className='w-[90%] lg:w-[75%] mx-auto text-center'>
          <p className='text-3xl sm:text-4xl font-bold mb-10'>
            We DO NOT serve food from{' '}
            <span className='text-[#E2394D]'>Restaurants!</span>
          </p>

          <div className='flex flex-col md:flex-row justify-evenly items-center gap-10'>
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

      {/* Why Us */}
      <section className='py-12 px-6 text-center bg-white'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
            <span className='text-[#63AB45]'>Why Us?</span> – Because you are
            very
            <span className='block text-[#63AB45]'>Special!</span>
          </h2>
          <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
            You will have every reason to count on us for healthy & tasty
            homemade food from nearby family kitchens. You will find a different
            concept & flavour while ordering home food from Mealawe.
          </p>
        </div>
      </section>

      {/* Advance Orders */}
      <section className='flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:px-12 py-10 gap-10'>
        <div className='w-full lg:w-[45%] flex flex-col items-center'>
          <img
            src='/src/assets/images/imgi_6_ui-elements-01 (1).webp'
            alt=''
            className='w-full mb-6'
          />
          <div className='text-center lg:text-right'>
            <p className='text-[#63AB45] text-4xl sm:text-5xl font-bold'>
              Advance Order
            </p>
            <p className='text-lg sm:text-2xl mt-2'>
              You can order your choice of homemade food in advance for up to 2
              days. Now you can plan for a perfect weekend.
            </p>
          </div>
          <img src='/src/assets/images/3.webp' alt='' className='mt-8 w-full' />
        </div>

        <div className='w-full lg:w-[45%] flex flex-col gap-10'>
          <div>
            <p className='text-[#63AB45] text-4xl sm:text-5xl font-bold'>
              All Day Order
            </p>
            <p className='text-lg sm:text-2xl mt-2'>
              Instant homemade food order during breakfast, lunch, high tea and
              dinner.
            </p>
          </div>
          <img src='/src/assets/images/2.webp' alt='' className='w-full' />
          <div>
            <p className='text-[#63AB45] text-4xl sm:text-5xl font-bold'>
              Regional Snacks
            </p>
            <p className='text-lg sm:text-2xl mt-2'>
              You can order a variety of your choice regional snacks such as
              pickles, papad, sweets, any side snacks, etc.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <p className='text-3xl sm:text-4xl lg:text-5xl text-center text-[#63AB45] font-bold mt-10'>
        Order in 4 simple steps
      </p>

      <section className='mt-10 w-full'>
        <div className='w-[95%] mx-auto flex flex-col lg:flex-row flex-wrap justify-center gap-10'>
          <StepsCompoent
            heading='Download Mealawe App'
            label='Download Mealawe app from iOS or Playstore. An app that has got all the traditional and regional flavours of India.'
            src='/src/assets/images/4.webp'
          />
          <StepsCompoentReverse
            heading='Create Your Account'
            label='Create your profile with the help of your mobile number. Set your email and cuisine preferences and you are good to go.'
            src='/src/assets/images/5.webp'
          />
          <StepsCompoent
            heading='Order Homemade Food'
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

      {/* Join Section */}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10 mt-20 px-4'>
        <img
          src='/src/assets/images/8.webp'
          alt=''
          className='w-full sm:w-[450px] lg:w-[550px]'
        />
        <div className='w-full lg:w-[40%] text-center p-4'>
          <h2 className='text-2xl sm:text-3xl font-bold text-[#63AB45] underline mb-2'>
            JOIN AS A CUSTOMER
          </h2>
          <h3 className='text-xl sm:text-2xl font-semibold text-[#63AB45] mb-4'>
            Order your choice of homemade food right away
          </h3>
          <p className='text-gray-700 mb-6 text-base sm:text-lg'>
            You can get the best homemade food within no time. You can place
            online food orders on the go. Also you can place advance orders of
            food items.
          </p>
          <div className='flex justify-center gap-4'>
            <img
              src='/src/assets/images/22.png'
              alt='App Store'
              className='h-10 sm:h-12'
            />
            <img
              src='/src/assets/images/23.png'
              alt='Play Store'
              className='h-10 sm:h-12'
            />
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="mt-20 py-12 px-4 bg-[url('/src/assets/images/9.webp')] bg-cover text-center">
        <h2 className='text-3xl sm:text-4xl font-bold mb-4'>Blog</h2>
        <p className='max-w-2xl mx-auto text-lg mb-6'>
          Mealawian writers are too passionate about sharing our know-how on
          food. After all, we are food experts!!
        </p>
        <button className='border border-[#63AB45] text-[#63AB45] font-semibold px-6 py-2 rounded-md hover:bg-[#63AB45] hover:text-white transition mb-8'>
          Read More
        </button>

        <div className='flex flex-wrap justify-center gap-8'>
          {blogPosts.map((e) => (
            <div
              key={e.id}
              className='bg-white rounded-3xl shadow-xl w-[90%] sm:w-72'
            >
              <img
                src={e.image}
                alt={e.title}
                className='h-48 w-full object-cover'
              />
              <div className='p-4 text-left'>
                <h3 className='font-semibold text-lg mb-2'>{e.title}</h3>
                <p className='text-sm text-gray-500 mb-2'>
                  {e.author} | {e.date} | {e.category}
                </p>
                <p className='text-sm'>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-white mt-20 text-gray-800 font-sans px-4 lg:px-16'>
        <p className='text-2xl sm:text-3xl text-center font-bold mb-6'>
          As Seen In
        </p>
        <div className='flex flex-wrap justify-center items-center gap-6 border-b border-gray-300 pb-6'>
          {[
            '14.png',
            '15.webp',
            '16.svg',
            '17.png',
            '18.png',
            '19.png',
            '20.png',
            '19.png',
          ].map((img, i) => (
            <img
              key={i}
              src={`/src/assets/images/${img}`}
              alt='Logo'
              className='w-24 sm:w-32 h-auto object-contain'
            />
          ))}
        </div>

        <div className='flex flex-col md:flex-row justify-between gap-10 py-10'>
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
              <FaFacebookF className='hover:text-green-600' />
              <FaInstagram className='hover:text-green-600' />
              <FaYoutube className='hover:text-green-600' />
              <FaLinkedinIn className='hover:text-green-600' />
            </div>
          </div>

          <div className='text-center md:text-left'>
            <h4 className='font-semibold text-lg mb-4'>Company</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              {['About us', 'Why us', 'Join Us', 'Careers', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <a href='#' className='hover:text-green-600'>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

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
                  <a href='#' className='hover:text-green-600'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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

export default Home;

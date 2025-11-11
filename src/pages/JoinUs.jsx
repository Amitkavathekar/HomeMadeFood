import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './../components/Button';
import Cardhome from './../components/Cardhome';
import JoinusCard from '../components/JoinusCard';

// ===== Imported Images =====
import thali1 from '../assets/images/thali1.jpg';
import svg28 from '../assets/images/28.svg';
import artboard106 from '../assets/images/Artboard-106.png';
import artboard107 from '../assets/images/Artboard-107.png';
import app22 from '../assets/images/22.png';
import app23 from '../assets/images/23.png';
import reversevector from '../assets/images/reversevector.svg';
import vector from '../assets/images/vector.svg';
import joinBg1 from '../assets/images/cafedine/Join-Us-bg2-1.jpg';
import joinGraphic from '../assets/images/cafedine/imgi_6_graphic-01-1.png';
import joinCopyBg from '../assets/images/cafedine/imgi_25_join-us-copy-bg-1.png';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pincode: '',
    city: '',
  });

  // Single handler with switch-case
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setFormData((prev) => ({
          ...prev,
          name: value.charAt(0).toUpperCase() + value.slice(1),
        }));
        break;

      case 'email':
        setFormData((prev) => ({
          ...prev,
          email: value.toLowerCase(),
        }));
        break;

      case 'mobile':
      case 'pincode':
      case 'city':
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <section className='relative overflow-x-hidden'>
        <div
          className='relative h-[43rem] w-full bg-no-repeat bg-cover bg-center bg-black/50 bg-blend-overlay flex justify-center items-center'
          style={{
            backgroundImage: `url(${thali1})`,
          }}
        >
          {/* Text + Form + Video */}
          <div className='text-4xl w-[75%] font-bold -mt-30 text-white p-4 relative z-10'>
            Register as a Home-Chef Today{' '}
            <span className='text-[#60C5B9]'>FREE*! </span>
            {/* Form + Video Section */}
            <div className='w-full flex flex-wrap gap-10 mt-10'>
              {/* ===== FORM SECTION ===== */}
              <form className='flex flex-col gap-4 w-full md:w-[45%] p-2'>
                <input
                  type='text'
                  name='name'
                  placeholder='Full Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-600 bg-white'
                />

                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-600 bg-white'
                />

                <input
                  type='number'
                  name='mobile'
                  placeholder='Mobile Number'
                  value={formData.mobile}
                  onChange={handleChange}
                  className='w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-600 bg-white'
                />

                <input
                  type='text'
                  name='pincode'
                  placeholder='Pincode'
                  value={formData.pincode}
                  onChange={handleChange}
                  className='w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-600 bg-white'
                />

                <select
                  name='city'
                  value={formData.city}
                  onChange={handleChange}
                  className='w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-600 bg-white'
                >
                  <option value=''>Choose Your City</option>
                  <option value='Mumbai'>Mumbai</option>
                  <option value='Pune'>Pune</option>
                  <option value='Sangli'>Sangli</option>
                </select>

                <Link to='/signup'>
                  <Button
                    className='w-48 h-12 rounded-3xl text-2xl text-white font-bold hover:opacity-90 transition'
                    style={{
                      backgroundColor: '#63AB45',
                    }}
                    label='Submit'
                  />
                </Link>
              </form>

              {/* ===== YOUTUBE VIDEO SECTION ===== */}
              <iframe
                className='w-full md:w-[50%] h-[350px] rounded-2xl'
                src='https://www.youtube.com/embed/Auz4yNXT69E'
                title='YouTube video'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* ===== Decorative SVG at Bottom ===== */}
          <img
            src={vector}
            className='  h-32 mt-70 md:h-50 w-full absolute top-60 left-0'
            alt=''
          />
        </div>
      </section>

      <section className='w-full  bg-white'>
        <div className='flex justify-center items-center h-screen w-full'>
          <div className='w-[70%] h-[85%] rounded-2xl gap-10 flex flex-wrap md:flex-nowrap'>
            <div className='h-full w-full md:w-[50%] rounded-2xl shadow-2xl shadow-gray-500/30'>
              <div className='p-5'>
                <img src={artboard106} alt='' />
                <p className='font-semibold text-[#60C8BC] border-b border-[#E62841] w-fit uppercase mt-5'>
                  Join as a home chef
                </p>
                <p className='text-3xl text-[#E62841] font-bold'>
                  Earn and grow with us as a Home Chef
                </p>
                <p className='mt-7'>
                  It’s time to earn from cooking that you have been doing your
                  whole life. Also, by delivering a share of your food, you will
                  make a healthy & happy society around you.
                </p>
                <div className='flex mt-10 gap-5'>
                  <img src={app22} className='h-10 w-auto' alt='22' />
                  <img src={app23} className='h-10 w-auto' alt='23' />
                </div>
              </div>
            </div>

            <div className='h-full w-full md:w-[50%] rounded-2xl shadow-2xl shadow-gray-500/30'>
              <div className='p-5'>
                <img src={artboard107} alt='' />
                <p className='font-semibold text-[#60C8BC] border-b border-[#E62841] w-fit uppercase mt-5'>
                  Join as a customer
                </p>
                <p className='text-3xl text-[#E62841] font-bold'>
                  Order your choice home-cooked food right away
                </p>
                <p className='mt-7'>
                  You can get the best homemade food within no time. You can
                  place online food orders on the go. Also, you can place
                  advance orders of food items.
                </p>
                <div className='flex mt-10 gap-5'>
                  <img src={app22} className='h-10 w-auto' alt='22' />
                  <img src={app23} className='h-10 w-auto' alt='23' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='h-auto relative'>
        <img
          className='absolute w-screen mt-0 top-[0px]'
          src={reversevector}
          alt=''
        />

        <div
          className='h-screen pt-40 w-full bg-center bg-no-repeat bg-[length:100%_100%] bg-black/60 bg-blend-overlay'
          style={{ backgroundImage: `url(${joinBg1})` }}
        >
          <div className='bg-fixed h-screen w-[70%] m-auto relative'>
            <p className='text-5xl text-white font-bold text-center'>
              Why Become Home Chef With Us?
            </p>

            <div className='mt-5 flex justify-center gap-20 flex-wrap'>
              <img style={{ height: '300px' }} src={joinGraphic} alt='' />
              <div className='w-full md:w-[50%] mt-10'>
                <p className='font-bold text-2xl text-[#FFC947]'>
                  You are more than a homemaker
                </p>
                <p className='font-bold text-xl mt-2 text-white'>
                  Time has come to reward you for your cooking skills which has
                  till date made your family happy. Once you join Mealawe as
                  home chef, you only have to serve a small amount of food that
                  you are cooking on a daily basis.
                </p>
              </div>
            </div>

            <div className='flex flex-row-reverse justify-center gap-20 flex-wrap mt-10'>
              <img style={{ height: '300px' }} src={joinGraphic} alt='' />
              <div className='w-full md:w-[50%]'>
                <p className='font-bold text-2xl text-[#FFC947] mt-10'>
                  You are more than a homemaker
                </p>
                <p className='font-bold text-xl mt-2 text-white'>
                  Time has come to reward you for your cooking skills which has
                  till date made your family happy. Once you join Mealawe as
                  home chef, you only have to serve a small amount of food that
                  you are cooking on a daily basis.
                </p>
              </div>
            </div>

            <div className='flex justify-center gap-20 flex-wrap mt-10'>
              <img style={{ height: '300px' }} src={joinGraphic} alt='' />
              <div className='w-full md:w-[50%] mt-10'>
                <p className='font-bold text-2xl text-[#FFC947] mt-10'>
                  You are more than a homemaker
                </p>
                <p className='font-bold text-xl mt-2 text-white'>
                  Time has come to reward you for your cooking skills which has
                  till date made your family happy. Once you join Mealawe as
                  home chef, you only have to serve a small amount of food that
                  you are cooking on a daily basis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={vector}
          className='z-0 h-32 md:h-50 w-full absolute top-305 left-0'
          alt=''
        />

        <div
          className='h-screen w-full bg-center bg-no-repeat bg-[length:100%_105%] bg-black/60 bg-blend-overlay'
          style={{ backgroundImage: `url(${joinBg1})` }}
        ></div>
      </section>

      <section className='lg:w-full lg:h-370'>
        <div className='lg:w-[70%] border m-auto lg:h-370'>
          <div className='lg:w-full mt-5 lg:h-auto'>
            <p className='font-bold text-red-600'>How It Works?</p>
            <p className='text-5xl text-[#60C8BC] font-bold lg:w-[80%]'>
              Register as a home chef with us in 4 easy steps
            </p>
            <p
              className='lg:w-[80%] text-xl text-gray-400 font-medium leading-{1}
 mt-10'
            >
              You will have to register with us & rest we will take care of.
              After you are enrolled, you will have access to the Mealawe home
              chef app from which you can accept orders.
            </p>
          </div>
          <div
            className='lg:h-250 mt-60 bg-center bg-no-repeat bg-contain'
            style={{ backgroundImage: `url(${joinCopyBg})` }}
          >
            <JoinusCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUs;

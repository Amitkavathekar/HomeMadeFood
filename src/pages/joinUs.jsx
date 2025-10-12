import React, { useState } from 'react';
import thali1 from '/src/assets/images/thali1.jpg';
import Button from './../components/Button';
import { Link } from 'react-router-dom';

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
          <div className='text-4xl w-[75%] font-bold  -mt-30 text-white p-4 relative z-10'>
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
          <div className="absolute bottom-0 left-0 w-full h-40 bg-[url('/src/assets/images/28.svg')] bg-no-repeat bg-contain bg-bottom"></div>
        </div>
      </section>
      <section className='h-screen w-full bg-white'>
        <div className=' flex justify-center items-center  h-screen w-full'>
          <div className='w-[70%] h-[85%]  rounded-2xl  gap-10 flex'>
            <div className='h-full w-[50%] rounded-2xl  shadow-2xl shadow-gray-500/30'>
              <div className='p-5 '>
                <img
                  className=''
                  src='/src/assets/images/Artboard-106.png'
                ></img>
                <p className='font-semibold text-[#60C8BC] border-b border-[#E62841] w-45 uppercase mt-5'>
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
                  <img
                    src='/src/assets/images/22.png'
                    className='h-10 w-auto'
                    alt='22'
                  />
                  <img
                    src='/src/assets/images/23.png'
                    className='h-10 w-auto'
                    alt='23'
                  />
                </div>
              </div>
            </div>
            <div className='h-full w-[50%] rounded-2xl  shadow-2xl shadow-gray-500/30'>
              <div className='p-5 '>
                <img
                  className=''
                  src='/src/assets/images/Artboard-107.png'
                ></img>
                <p className='font-semibold text-[#60C8BC] border-b border-[#E62841] w-45 uppercase mt-5'>
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
                  <img
                    src='/src/assets/images/22.png'
                    className='h-10 w-auto'
                    alt='22'
                  />
                  <img
                    src='/src/assets/images/23.png'
                    className='h-10 w-auto'
                    alt='23'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className='w-screen mt-0 '
            src='/src/assets/images/reversevector.svg'
          ></img>
        </div>
      </section>

      <section className=''>
        <div
          className="h-screen   w-full bg-[url('/src/assets/images/cafedine/Join-Us-bg2-1.jpg')]
              bg-center bg-no-repeat bg-[length:100%_100%]  bg-black/60 bg-blend-overlay"
        >
          <div className=' bg-fixed h-screen w-[70%] m-auto'>
            <p className=' text-5xl text-[#ffff] font-bold text-center'>
              Why Become Home Chef With Us?
            </p>

            <div className=' mt-10 h-90 flex justify-center gap-20'>
              <img
                style={{ height: '350px' }}
                src='/src/assets/images/cafedine/imgi_6_graphic-01-1.png'
              ></img>
              <div className='w-[40%] mt-10'>
                <p className='font-bold text-2xl text-[#FFC947]'>
                  You are more than a homemaker
                </p>
                <p className=' font-bold text-xl mt-2 text-[#ffff]'>
                  Time has come to reward you for your cooking skills which has
                  till date made your family happy. Once you join Mealawe as
                  home chef, you only have to serve a small amount of food that
                  you are cooking on a daily basis.
                </p>
              </div>
            </div>

            <div className='h-90 flex flex-row-reverse justify-center  gap-20'>
              <img
                style={{ height: '350px' }}
                src='/src/assets/images/cafedine/imgi_6_graphic-01-1.png'
              ></img>
              <div className='w-[40%] flex '>
                <div className='items-center justify-center'>
                  <p className='font-bold text-2xl text-[#FFC947]  mt-20'>
                    You are more than a homemaker
                  </p>
                  <p className=' font-bold text-xl mt-2 text-[#ffff]'>
                    Time has come to reward you for your cooking skills which
                    has till date made your family happy. Once you join Mealawe
                    as home chef, you only have to serve a small amount of food
                    that you are cooking on a daily basis.
                  </p>
                </div>
              </div>
            </div>
            <div className='  h-90 flex justify-center gap-20'>
              <img
                style={{ height: '350px' }}
                src='/src/assets/images/cafedine/imgi_6_graphic-01-1.png'
              ></img>
              <div className='w-[40%] mt-10'>
                <p className='font-bold text-2xl text-[#FFC947] mt-10'>
                  You are more than a homemaker
                </p>
                <p className=' font-bold text-xl mt-2 text-[#ffff]'>
                  Time has come to reward you for your cooking skills which has
                  till date made your family happy. Once you join Mealawe as
                  home chef, you only have to serve a small amount of food that
                  you are cooking on a daily basis.
                </p>
              </div>
            </div>

            <div className=' h-90 flex flex-row-reverse justify-center  gap-20'>
              <img
                style={{ height: '350px' }}
                src='/src/assets/images/cafedine/imgi_6_graphic-01-1.png'
              ></img>
              <div className='w-[40%] flex '>
                <div className='items-center justify-center '>
                  <p className='font-bold text-2xl text-[#FFC947]  mt-20'>
                    You are more than a homemaker
                  </p>
                  <p className=' font-bold text-xl mt-2 text-[#ffff]'>
                    Time has come to reward you for your cooking skills which
                    has till date made your family happy. Once you join Mealawe
                    as home chef, you only have to serve a small amount of food
                    that you are cooking on a daily basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-screen w-full  bg-[url('/src/assets/images/cafedine/Join-Us-bg2-1.jpg')]
              bg-center bg-no-repeat bg-[length:100%_105%] bg-black/60 bg-blend-overlay"
        ></div>
      </section>
    </>
  );
};

export default JoinUs;

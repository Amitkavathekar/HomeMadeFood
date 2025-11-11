import React from 'react';

// ✅ Import all images here
import HeaderImageCorporate from '../assets/images/Header-Image-Corporate.jpg';
import HomeCookGood1 from '../assets/images/Home-Cook-Good1.png';
import Vector from '../assets/images/vector.svg';
import CorporateMealPlan from '../assets/images/cafedine/Corporate-Meal-Plan.jpg';
import MealaweAccountManager from '../assets/images/cafedine/Mealawe-Account-Manager.jpg';
import RegionalFoodIndia from '../assets/images/cafedine/Regional-food-India-300x242.jpg';

const ForCorporates = () => {
  return (
    <div className='relative'>
      {/* 🟦 Top Hero Section */}
      <section
        className="h-[650px] bg-cover bg-center flex justify-center items-center bg-black/50 bg-blend-overlay"
        style={{ backgroundImage: `url(${HeaderImageCorporate})` }}
      >
        <div className='w-[90%] md:w-[80%] lg:w-[70%] flex flex-col lg:flex-row gap-5  lg:gap-20 items-center justify-center'>
          <div className='w-full lg:w-[50%] text-center lg:text-left px-4 lg:px-0'>
            <p className='text-[#FF7F6A] text-lg md:text-xl'>
              Corporate Meal Solutions
            </p>
            <p className='font-bold text-3xl md:text-4xl lg:text-5xl mt-5 text-white leading-snug'>
              You are What Your Employee Eat!
            </p>
            <p className='text-lg md:text-xl mt-6 md:mt-10 text-white'>
              Bulk Orders | Corporate Get Together | Celebrations | Events
            </p>
          </div>

          <div className='w-[60%] sm:w-[50%]  md:w-[40%] lg:w-[30%] h-full relative flex justify-center lg:justify-start'>
            <img
              src={HomeCookGood1}
              alt=''
              className=' mt-40 md:mt-20 lg:-mt-8 max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:absolute'
            />
          </div>
        </div>
      </section>

      {/* 🟥 What do You Get Section */}
      <section className='relative py-16 md:py-24 flex justify-center items-center'>
        <img
          src={Vector}
          alt='vector'
          className='absolute top-[-80px] md:top-[-120px] left-0 w-full'
        />
        <div className='w-[90%] md:w-[80%] z-10'>
          <p className='text-3xl md:text-4xl font-bold text-[#E62841] text-center mt-5 md:mt-10'>
            What do You Get?
          </p>
          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 mt-10'>
            {/* Card 1 */}
            <div className='w-[90%] sm:w-[70%] md:w-[30%] text-center'>
              <img
                src={CorporateMealPlan}
                alt=''
                className='mt-5 mb-5 rounded-2xl mx-auto'
              />
              <p className='text-xl md:text-2xl font-medium text-[#E62841] mb-2'>
                Complete Meal Solutions
              </p>
              <p className='text-sm md:text-md font-medium text-gray-700 px-2 md:px-0'>
                We have every type of meal solution for all kinds of corporate
                occasion. Be it one-time or recurring orders, we are there for
                you. We can serve 1-1000 people at a time.
              </p>
            </div>

            {/* Card 2 */}
            <div className='w-[90%] sm:w-[70%] md:w-[30%] text-center'>
              <img
                src={MealaweAccountManager}
                alt=''
                className='mt-5 mb-5 rounded-2xl mx-auto'
              />
              <p className='text-xl md:text-2xl font-medium text-[#E62841] mb-2'>
                Complete Meal Solutions
              </p>
              <p className='text-sm md:text-md font-medium text-gray-700 px-2 md:px-0'>
                We have every type of meal solution for all kinds of corporate
                occasion. Be it one-time or recurring orders, we are there for
                you. We can serve 1-1000 people at a time.
              </p>
            </div>

            {/* Card 3 */}
            <div className='w-[90%] sm:w-[70%] md:w-[30%] text-center'>
              <img
                src={RegionalFoodIndia}
                alt=''
                className='mt-5 mb-5 rounded-2xl mx-auto'
              />
              <p className='text-xl md:text-2xl font-medium text-[#E62841] mb-2'>
                Complete Meal Solutions
              </p>
              <p className='text-sm md:text-md font-medium text-gray-700 px-2 md:px-0'>
                We have every type of meal solution for all kinds of corporate
                occasion. Be it one-time or recurring orders, we are there for
                you. We can serve 1-1000 people at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟩 What does Your Employee Get Section */}
      <section className='relative py-16 md:py-24 flex justify-center items-center'>
        <img
          src={Vector}
          alt='vector'
          className='absolute top-[-80px] md:top-[-120px] left-0 w-full'
        />
        <div className='w-[90%] md:w-[80%] z-10'>
          <p className='text-3xl md:text-4xl font-bold text-[#60C8BC] text-center mt-5 md:mt-10'>
            What does Your Employee Get?
          </p>
          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 mt-10'>
            {/* Card 1 */}
            <div className='w-[90%] sm:w-[70%] md:w-[30%] text-center'>
              <img
                src={CorporateMealPlan}
                alt=''
                className='mt-5 mb-5 rounded-2xl mx-auto'
              />
              <p className='text-xl md:text-2xl font-medium text-[#E62841] mb-2'>
                Complete Meal Solutions
              </p>
              <p className='text-sm md:text-md font-medium text-gray-700 px-2 md:px-0'>
                We have every type of meal solution for all kinds of corporate
                occasion. Be it one-time or recurring orders, we are there for
                you. We can serve 1-1000 people at a time.
              </p>
            </div>

            {/* Card 2 */}
            <div className='w-[90%] sm:w-[70%] md:w-[30%] text-center'>
              <img
                src={MealaweAccountManager}
                alt=''
                className='mt-5 mb-5 rounded-2xl mx-auto'
              />
              <p className='text-xl md:text-2xl font-medium text-[#E62841] mb-2'>
                Complete Meal Solutions
              </p>
              <p className='text-sm md:text-md font-medium text-gray-700 px-2 md:px-0'>
                We have every type of meal solution for all kinds of corporate
                occasion. Be it one-time or recurring orders, we are there for
                you. We can serve 1-1000 people at a time.
              </p>
            </div>

            {/* Card 3 */}
            <div className='w-[90%] sm:w-[70%] md:w-[30%] text-center'>
              <img
                src={RegionalFoodIndia}
                alt=''
                className='mt-5 mb-5 rounded-2xl mx-auto'
              />
              <p className='text-xl md:text-2xl font-medium text-[#E62841] mb-2'>
                Complete Meal Solutions
              </p>
              <p className='text-sm md:text-md font-medium text-gray-700 px-2 md:px-0'>
                We have every type of meal solution for all kinds of corporate
                occasion. Be it one-time or recurring orders, we are there for
                you. We can serve 1-1000 people at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟩 Placeholder Section */}
      <section className='h-[300px] md:h-[400px] w-full bg-green-500'></section>
    </div>
  );
};

export default ForCorporates;

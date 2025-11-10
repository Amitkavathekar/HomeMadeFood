import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Career = () => {
  return (
    <section>
      <div className='lg:h-150 lg:w-full  flex justify-center items-center'>
        <div className='lg:h-120 lg:w-[70%]'>
          <p className='lg:w-full text-red-600 text-xs font-bold'>CAREERS</p>
          <p className='text-center text-3xl font-bold text-[#60C8BC]'>
            Build a Better World with Us
          </p>
          <p className='text-center mt-5 text-xl text-gray-600'>
            Please fill-up the form and share your interest with us. Thank You!
          </p>
          <img
            src='/src/assets/images/cafedine/imgi_7_.png'
            className='m-auto mt-5'
          ></img>
          <div className='lg:w-full lg:h-10 flex justify-center'>
            <a
              href='https://yagytech.com/careers/'
              target='blank'
              rel='noopener noreferrer'
            >
              <Button
                className='lg:h-13 mt-5 text-xl  rounded-2xl px-4 lg:w-35 m-auto bg-[#63AB45] text-white font-bold'
                label='Apply Here'
              ></Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Career;

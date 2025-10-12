import React from 'react';

const WhyUs = () => {
  return (
    <div>
      {/* hero */}
      <section className="h-180  w-full bg-cover bg-no-repeat bg-[url('/src/assets/images/26.jpg')] bg-black/50 bg-blend-overlay">
        <div className='w-[70%]  h-[75%] m-auto flex '>
          {/* Left box */}
          <div className='h-full w-full  flex flex-col items-center justify-center'>
            <p className='text-white text-2xl font-bold'>Why Us?</p>
            <p className='text-5xl font-bold text-white'>
              Because you are very special!
            </p>
            <p className='text-white text-xl'>
              You will have every reason to count on us for healthy & tasty home
              food. You will find a different concept & flavour while ordering
              home food from Mealawe.
            </p>
          </div>

          {/* Right box */}

          <div className='h-140  bg-no-repeat w-5/6  '>
            <img
              className='mt-15  ml-20'
              src='/src/assets/images/27.png'
              alt=''
            />
          </div>
        </div>

        {/* bottom background image */}
        <div className="mt- h-50 w-full bg-[url('/src/assets/images/28.svg')] bg-no-repeat bg-contain"></div>
      </section>

      <section className='w-full  h-600'>
        <div className=' mt-15 m-auto w-[70%]  '>
          <div className='h-150 flex items-center justify-between w-full '>
            <img
              className='bg-contain h-120'
              src='/src/assets/images/31.png'
              alt=''
            />
            <div className="h-110 mt-5 bg-contain flex items-center justify-center bg-no-repeat w-[50%] bg-[url('/src/assets/images/35.png')]">
              <div className='h-[75%] w-[80%]'>
                <p className='text-5xl font-bold text-[#6ACBC0]'>#1</p>
                <p className='text-4xl font-bold text-[#E62841]'>
                  Say “NO” to unhealthy outside food
                </p>
                <p className='mt-5 text-xl '>
                  Our neighbourhood kitchens are going to serve what they are
                  going to serve their family.
                </p>
                <p className='mt-5 text-xl '>
                  So, you can rest assured that you are going to get healthy
                  home food that has soul in it. Also, our home kitchens are
                  100% FSSAI certified.
                </p>
              </div>
            </div>
          </div>

          <div className='h-150 flex items-center justify-between w-full '>
            <div className="h-110 mt-5 bg-contain flex items-center justify-center bg-no-repeat w-[50%] bg-[url('/src/assets/images/35.png')]">
              <div className='h-[75%] w-[80%]'>
                <p className='text-5xl font-bold text-[#6ACBC0]'>#2</p>
                <p className='text-4xl font-bold text-[#E62841]'>
                  Get the authentic taste of your regional food
                </p>
                <p className='mt-5 text-xl '>
                  Now no geographical boundary can keep you away from your own
                  regional cuisine.
                </p>
                <p className='mt-5 text-xl '>
                  You can look for your choice of authentic regional home
                  kitchen and place online orders right away.
                </p>
              </div>
            </div>
            <img
              className='bg-contain h-110'
              src='/src/assets/images/32.png'
              alt=''
            />
          </div>
          <div className='h-150 flex items-center justify-between w-full '>
            <img
              className='bg-contain h-120'
              src='/src/assets/images/33.png'
              alt=''
            />
            <div className="h-110 mt-5 bg-contain flex items-center justify-center bg-no-repeat w-[50%] bg-[url('/src/assets/images/35.png')]">
              <div className='h-[75%] w-[80%]'>
                <p className='text-5xl font-bold text-[#6ACBC0]'>#3</p>
                <p className='text-4xl font-bold text-[#E62841]'>
                  Online home food delivery within minutes
                </p>
                <p className='mt-5 text-xl '>
                  Yes, we will get you homemade food deliveries within minutes.{' '}
                </p>
                <p className='mt-5 text-xl '>
                  We have a network of trusted delivery partners who can do
                  daily as well as advance food order deliveries.
                </p>
              </div>
            </div>
          </div>
          <div className='h-150 flex items-center justify-between w-full '>
            <div className="h-110 mt-5 bg-contain flex items-center justify-center bg-no-repeat w-[50%] bg-[url('/src/assets/images/35.png')]">
              <div className='h-[75%] w-[80%]'>
                <p className='text-5xl font-bold text-[#6ACBC0]'>#4</p>
                <p className='text-4xl font-bold text-[#E62841]'>
                  Creating entrepreneurs in every home
                </p>
                <p className='mt-5 text-xl '>
                  Home chefs have been cooking all their life for their families
                  without asking anything in return.
                </p>
                <p className='mt-5 text-xl '>
                  Now the time has come to reward them with a sustainable
                  business from the comfort of their home.
                </p>
              </div>
            </div>
            <img
              className='bg-contain h-100'
              src='/src/assets/images/34.png'
              alt=''
            />
          </div>
        </div>
      </section>

      <section className="relative h-200 w-full bg-cover bg-[url('/src/assets/images/36.jpg')] bg-black/50 bg-blend-overlay">
        <img
          className='z-0 h-50 w-full absolute top-0 left-0'
          src='/src/assets/images/38.svg'
          alt=''
        />

        <div className='absolute inset-0 border flex-col flex items-center justify-center'>
          <p className='text-5xl  text-white font-bold'>
            Check out What’s Cooking?
          </p>
          <p>this is my prj</p>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;

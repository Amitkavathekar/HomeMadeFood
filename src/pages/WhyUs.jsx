import React from 'react';

const WhyUs = () => {
  return (
    <div>
      {/* hero */}
      <section className="min-h-[40rem] w-full bg-cover bg-no-repeat bg-[url('/src/assets/images/26.jpg')] bg-black/50 bg-blend-overlay">
        <div className='w-[90%] lg:w-[70%] h-[75%] m-auto flex flex-col lg:flex-row items-center justify-center gap-6 py-10'>
          {/* Left box */}
          <div className='h-full w-full flex flex-col items-center justify-center text-center lg:text-left px-4'>
            <p className='text-white text-2xl md:text-3xl font-bold'>Why Us?</p>
            <p className='text-3xl md:text-5xl font-bold text-white mt-2'>
              Because you are very special!
            </p>
            <p className='text-white text-base md:text-xl mt-4 leading-relaxed'>
              You will have every reason to count on us for healthy & tasty home
              food. You will find a different concept & flavour while ordering
              home food from Mealawe.
            </p>
          </div>

          {/* Right box */}
          <div className='h-auto w-full lg:w-5/6 flex justify-center lg:justify-end'>
            <img
              className='w-[80%] sm:w-[60%] lg:w-[70%] xl:w-[60%] mt-6 lg:mt-0'
              src='/src/assets/images/27.png'
              alt=''
            />
          </div>
        </div>

        {/* bottom background image */}
        <div className="h-40 md:h-50 w-full bg-[url('/src/assets/images/28.svg')] bg-no-repeat bg-contain bg-center"></div>
      </section>

      {/* Main content */}
      <section className='w-full min-h-screen'>
        <div className='mt-10 m-auto w-[90%] lg:w-[70%] space-y-20'>
          {/* Section #1 */}
          <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-10'>
            <img
              className='h-60 sm:h-80 md:h-96 bg-contain'
              src='/src/assets/images/31.png'
              alt=''
            />
            <div className="h-auto bg-contain flex items-center justify-center bg-no-repeat w-full lg:w-[50%] bg-[url('/src/assets/images/35.png')] p-6 sm:p-10">
              <div className='w-full md:w-[80%] text-center lg:text-left'>
                <p className='text-4xl md:text-5xl font-bold text-[#6ACBC0]'>
                  #1
                </p>
                <p className='text-2xl md:text-4xl font-bold text-[#E62841] mt-2'>
                  Say “NO” to unhealthy outside food
                </p>
                <p className='mt-4 text-base md:text-xl'>
                  Our neighbourhood kitchens are going to serve what they serve
                  their family.
                </p>
                <p className='mt-3 text-base md:text-xl'>
                  So, you can rest assured you’re getting healthy home food with
                  soul. All kitchens are FSSAI certified.
                </p>
              </div>
            </div>
          </div>

          {/* Section #2 */}
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10'>
            <div className="h-auto bg-contain flex items-center justify-center bg-no-repeat w-full lg:w-[50%] bg-[url('/src/assets/images/35.png')] p-6 sm:p-10">
              <div className='w-full md:w-[80%] text-center lg:text-left'>
                <p className='text-4xl md:text-5xl font-bold text-[#6ACBC0]'>
                  #2
                </p>
                <p className='text-2xl md:text-4xl font-bold text-[#E62841] mt-2'>
                  Get the authentic taste of your regional food
                </p>
                <p className='mt-4 text-base md:text-xl'>
                  No geographical boundary can keep you from your own regional
                  cuisine.
                </p>
                <p className='mt-3 text-base md:text-xl'>
                  Find authentic regional home kitchens and order online
                  instantly.
                </p>
              </div>
            </div>
            <img
              className='h-60 sm:h-80 md:h-96 bg-contain'
              src='/src/assets/images/32.png'
              alt=''
            />
          </div>

          {/* Section #3 */}
          <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-10'>
            <img
              className='h-60 sm:h-80 md:h-96 bg-contain'
              src='/src/assets/images/33.png'
              alt=''
            />
            <div className="h-auto bg-contain flex items-center justify-center bg-no-repeat w-full lg:w-[50%] bg-[url('/src/assets/images/35.png')] p-6 sm:p-10">
              <div className='w-full md:w-[80%] text-center lg:text-left'>
                <p className='text-4xl md:text-5xl font-bold text-[#6ACBC0]'>
                  #3
                </p>
                <p className='text-2xl md:text-4xl font-bold text-[#E62841] mt-2'>
                  Online home food delivery within minutes
                </p>
                <p className='mt-4 text-base md:text-xl'>
                  Yes, we’ll deliver homemade food within minutes.
                </p>
                <p className='mt-3 text-base md:text-xl'>
                  Our trusted delivery partners handle both daily and advance
                  orders.
                </p>
              </div>
            </div>
          </div>

          {/* Section #4 */}
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10'>
            <div className="h-auto bg-contain flex items-center justify-center bg-no-repeat w-full lg:w-[50%] bg-[url('/src/assets/images/35.png')] p-6 sm:p-10">
              <div className='w-full md:w-[80%] text-center lg:text-left'>
                <p className='text-4xl md:text-5xl font-bold text-[#6ACBC0]'>
                  #4
                </p>
                <p className='text-2xl md:text-4xl font-bold text-[#E62841] mt-2'>
                  Creating entrepreneurs in every home
                </p>
                <p className='mt-4 text-base md:text-xl'>
                  Home chefs have cooked for families all their life without
                  returns.
                </p>
                <p className='mt-3 text-base md:text-xl'>
                  Now it’s time to reward them with sustainable business from
                  home.
                </p>
              </div>
            </div>
            <img
              className='h-60 sm:h-80 md:h-96 bg-contain'
              src='/src/assets/images/34.png'
              alt=''
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative h-470 md:h-600 lg:h-215   w-full bg-cover bg-[url('/src/assets/images/36.jpg')] bg-black/50 bg-blend-overlay mt-20">
        <img
          className='z-0 h-32 md:h-50 w-full absolute top-0 left-0'
          src='/src/assets/images/38.svg'
          alt=''
        />
        <div className='absolute top-25 md:top-35 lg:top-40 flex flex-col items-center justify-center text-center px-4'>
          <p className='text-3xl mt-5 md:text-5xl  text-white font-bold'>
            Check out What’s Cooking?
          </p>
          <div className=' flex flex-wrap  mt-10 gap-6 lg:gap-10 border w-[90%] h-auto  lg:flex lg:flex-wrap  items-center justify-center '>
            <img
              className='lg:w-70 xl:w-80'
              src='/src/assets/images/imgi_8_punjabi.png'
            ></img>
            <img
              className='lg:w-70 xl:w-80'
              src='/src/assets/images/cafedine/imgi_7_gujarati.png'
            ></img>
            <img
              className='lg:w-70 xl:w-80'
              src='/src/assets/images/cafedine/imgi_10_south-indian.png'
            ></img>
            <img
              className='lg:w-70 xl:w-80'
              src='/src/assets/images/imgi_8_punjabi.png'
            ></img>
            <img
              className='lg:w-70 xl:w-80'
              src='/src/assets/images/imgi_8_punjabi.png'
            ></img>
            <img
              className='lg:w-70 xl:w-80'
              src='/src/assets/images/imgi_8_punjabi.png'
            ></img>
            <img
              className='lg:w-70 xl:w-80'
              src='/src/assets/images/imgi_8_punjabi.png'
            ></img>
            <img
              className='lg:w-70 xl:w-80'
              src='/src/assets/images/imgi_8_punjabi.png'
            ></img>
            <img
              className='lg:w-70 xl:w-80'
              src='/src/assets/images/imgi_8_punjabi.png'
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;

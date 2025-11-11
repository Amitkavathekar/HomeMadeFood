import React from 'react';
import Footer from '../components/Footer';

// Image imports
import img26 from '../assets/images/26.jpg';
import img27 from '../assets/images/27.png';
import img28 from '../assets/images/28.svg';
import img31 from '../assets/images/31.png';
import img32 from '../assets/images/32.png';
import img33 from '../assets/images/33.png';
import img34 from '../assets/images/34.png';
import img35 from '../assets/images/35.png';
import img36 from '../assets/images/36.jpg';
import img38 from '../assets/images/38.svg';
import vector from '../assets/images/vector.svg';

// Cafedine + regional images
import imgPunjabi from '../assets/images/imgi_8_punjabi.png';
import imgGujarati from '../assets/images/cafedine/imgi_7_gujarati.png';
import imgSouthIndian from '../assets/images/cafedine/imgi_10_south-indian.png';
import imgKashmiri from '../assets/images/cafedine/imgi_5_kashmiri.png';
import imgMaharashtrian from '../assets/images/cafedine/imgi_8_maharashtrian.png';
import imgBihari from '../assets/images/cafedine/imgi_11_bihari.png';
import imgNorthEastern from '../assets/images/cafedine/imgi_6_north0eastern.png';
import imgBengali from '../assets/images/imgi_9_bengali.png';
import imgRajasthani from '../assets/images/imgi_12_rajasthani.png';

// App Store, Play Store, QR, Chef
import img22 from '../assets/images/22.png';
import img23 from '../assets/images/23.png';
import qr from '../assets/images/cafedine/qr.png';
import homeChef from '../assets/images/home-chef-updated-graphic-610x659.png';

const WhyUs = () => {
  return (
    <div>
      {/* hero */}
      <section
        className='min-h-[40rem] relative w-full bg-cover bg-no-repeat bg-black/50 bg-blend-overlay'
        style={{ backgroundImage: `url(${img26})` }}
      >
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
              className='w-[80%] sm:w-[60%] lg:w-[80%] xl:w-[60%] mt-6 lg:mt-0'
              src={img27}
              alt=''
            />
          </div>
        </div>
        <img
          src={vector}
          className='  h-32 mt-56 md:h-50 w-full absolute top-55 left-0'
          alt=''
        />
      </section>

      {/* Main content */}
      <section className='w-full min-h-screen'>
        <div className='mt-10 m-auto w-[90%] lg:w-[70%] space-y-20'>
          {/* Section #1 */}
          <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-10'>
            <img
              className='h-60 sm:h-80 md:h-96 bg-contain'
              src={img31}
              alt=''
            />
            <div
              className='h-auto bg-contain flex items-center justify-center bg-no-repeat w-full lg:w-[50%] p-6 sm:p-10'
              style={{ backgroundImage: `url(${img35})` }}
            >
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
            <div
              className='h-auto bg-contain flex items-center justify-center bg-no-repeat w-full lg:w-[50%] p-6 sm:p-10'
              style={{ backgroundImage: `url(${img35})` }}
            >
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
              src={img32}
              alt=''
            />
          </div>

          {/* Section #3 */}
          <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-10'>
            <img
              className='h-60 sm:h-80 md:h-96 bg-contain'
              src={img33}
              alt=''
            />
            <div
              className='h-auto bg-contain flex items-center justify-center bg-no-repeat w-full lg:w-[50%] p-6 sm:p-10'
              style={{ backgroundImage: `url(${img35})` }}
            >
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
            <div
              className='h-auto bg-contain flex items-center justify-center bg-no-repeat w-full lg:w-[50%] p-6 sm:p-10'
              style={{ backgroundImage: `url(${img35})` }}
            >
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
              src={img34}
              alt=''
            />
          </div>
        </div>
      </section>

      {/* What's Cooking Section */}
      <section
        className='relative h-470 md:h-600 lg:h-250 w-full bg-cover bg-black/50 bg-blend-overlay mt-20'
        style={{ backgroundImage: `url(${img36})` }}
      >
        <img
          className='z-0 h-32 md:h-50 w-full absolute top-0 left-0'
          src={img38}
          alt=''
        />
        <div className='absolute top-25 md:top-35 lg:top-40 flex flex-col items-center justify-center text-center px-4'>
          <p className='text-3xl mt-10 md:text-5xl text-white font-bold'>
            Check out What’s Cooking?
          </p>
          <div className='flex flex-wrap mt-10 gap-6 lg:gap-10 w-[90%] h-auto lg:flex lg:flex-wrap items-center justify-center'>
            <img className='lg:w-70 xl:w-80' src={imgPunjabi} alt='' />
            <img className='lg:w-70 xl:w-80' src={imgGujarati} alt='' />
            <img className='lg:w-70 xl:w-80' src={imgSouthIndian} alt='' />
            <img className='lg:w-70 xl:w-80' src={imgKashmiri} alt='' />
            <img className='lg:w-70 xl:w-80' src={imgMaharashtrian} alt='' />
            <img className='lg:w-70 xl:w-80' src={imgBihari} alt='' />
            <img className='lg:w-70 xl:w-80' src={imgNorthEastern} alt='' />
            <img className='lg:w-70 xl:w-80' src={imgBengali} alt='' />
            <img className='lg:w-70 xl:w-80' src={imgRajasthani} alt='' />
          </div>
          <img
            src={vector}
            className='z-0 h-32 mt-170 md:h-50 w-full absolute top-0 left-0'
            alt=''
          />
        </div>
      </section>

      {/* Download Section */}
      <section className='border lg:h-175 w-full flex justify-center items-center'>
        <div className='lg:h-160 flex justify-between lg:w-[70%]'>
          <div className='lg:w-full flex items-center'>
            <div>
              <p className='text-4xl font-bold mt-10'>
                Get your homemade meal delivered today
              </p>
              <p className='text-2xl font-bold mt-5 text-gray-500'>
                Download for free!
              </p>
              <div className='flex gap-10 mt-5'>
                <img src={qr} className='w-[150px] h-[150px]' alt='QR' />
                <div className='flex flex-col justify-around'>
                  <img
                    src={img22}
                    className='w-[160px] h-[55px]'
                    alt='App Store'
                  />
                  <img
                    src={img23}
                    className='w-[160px] h-[55px]'
                    alt='Play Store'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center w-full'>
            <img src={homeChef} className='w-[450px] h-[500px]' alt='Chef' />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;

import React from 'react';
import Footer from '../components/Footer';

import { Card, CardContent } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Images
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

import imgPunjabi from '../assets/images/imgi_8_punjabi.png';
import imgGujarati from '../assets/images/cafedine/imgi_7_gujarati.png';
import imgSouthIndian from '../assets/images/cafedine/imgi_10_south-indian.png';
import imgKashmiri from '../assets/images/cafedine/imgi_5_kashmiri.png';
import imgMaharashtrian from '../assets/images/cafedine/imgi_8_maharashtrian.png';
import imgBihari from '../assets/images/cafedine/imgi_11_bihari.png';
import imgNorthEastern from '../assets/images/cafedine/imgi_6_north0eastern.png';
import imgBengali from '../assets/images/imgi_9_bengali.png';
import imgRajasthani from '../assets/images/imgi_12_rajasthani.png';

import img22 from '../assets/images/22.png';
import img23 from '../assets/images/23.png';
import qr from '../assets/images/cafedine/qr.png';
import homeChef from '../assets/images/home-chef-updated-graphic-610x659.png';

const WhyUs: React.FC = () => {
  return (
    <div>
      {/* hero */}
      <section
        className='min-h-[40rem] relative xl-relative w-full bg-cover bg-no-repeat bg-black/50 bg-blend-overlay'
        style={{ backgroundImage: `url(${img26})` }}
      >
        <div className='w-[90%] lg:w-[70%] h-[75%] m-auto flex flex-col lg:flex-row items-center justify-center gap-6 py-10'>
          {/* Left */}
          <div className='h-full w-full flex flex-col items-center justify-center text-center lg:text-left px-4'>
            <Badge className='text-lg px-4 py-2'>Why Us?</Badge>

            <p className='text-3xl md:text-5xl font-bold text-white mt-2'>
              Because you are very special!
            </p>

            <p className='text-white text-base md:text-xl mt-4 leading-relaxed'>
              You will have every reason to count on us for healthy & tasty home
              food. You will find a different concept & flavour while ordering
              home food from Mealawe.
            </p>
          </div>

          {/* Right */}
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
          className='h-32 mt-56 md:h-50 w-full absolute top-55 left-0'
          alt=''
        />
      </section>

      {/* Main */}
      <section className='w-full min-h-screen'>
        <div className='mt-10 m-auto w-[90%] lg:w-[70%] space-y-20'>
          {/* #1 */}
          <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-10'>
            <img
              className='h-60 sm:h-80 md:h-96'
              src={img31}
            />

            <Card className='w-full   h-90  lg:w-[50%] bg-transparent border-none shadow-none'>
              <CardContent
                className='bg-cover  z-1 h bg-no-repeat p-6 sm:p-10 '
                style={{
                  backgroundImage: `url(${img35})`,
                  width: '500px',
                  height: '300px',
                }}
              >
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
                  soul.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* #2 */}
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10'>
            <Card className='w-full lg:w-[50%] bg-transparent border-none shadow-none'>
              <CardContent
                className='bg-contain bg-no-repeat p-6 sm:p-10'
                style={{
                  backgroundImage: `url(${img35}
                  )`,
                }}
              >
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
              </CardContent>
            </Card>

            <img
              className='h-60 sm:h-80 md:h-96'
              src={img32}
            />
          </div>

          {/* #3 */}
          <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-10'>
            <img
              className='h-60 sm:h-80 md:h-96'
              src={img33}
            />

            <Card className='w-full lg:w-[50%] bg-transparent border-none shadow-none'>
              <CardContent
                className='bg-contain bg-no-repeat p-6 sm:p-10'
                style={{ backgroundImage: `url(${img35})` }}
              >
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
              </CardContent>
            </Card>
          </div>

          {/* #4 */}
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10'>
            <Card className='w-full lg:w-[50%] bg-transparent border-none shadow-none'>
              <CardContent
                className='bg-contain bg-no-repeat p-6 sm:p-10'
                style={{ backgroundImage: `url(${img35})` }}
              >
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
              </CardContent>
            </Card>

            <img
              className='h-60 sm:h-80 md:h-96'
              src={img34}
            />
          </div>
        </div>
      </section>

      {/* What's Cooking */}
      <section
        className='relative w-full h-240 flex justify-center bg-cover bg-black/50 bg-blend-overlay py-20'
        style={{ backgroundImage: `url(${img36})` }}
      >
        <img
          className='h-32 w-full absolute top-0 left-0'
          src={img38}
        />

        <div className='flex flex-wrap justify-center w-[80%] h-[60%] gap-6 mt-20'>
          {[
            imgPunjabi,
            imgGujarati,
            imgSouthIndian,
            imgKashmiri,
            imgMaharashtrian,
            imgBihari,
            imgNorthEastern,
            imgBengali,
            imgRajasthani,
          ].map((img, i) => (
            <Card
              key={i}
              className='p-2 h-50 bg-cover border-none shadow-none'
            >
              <CardContent className='p-0'>
                <img
                  src={img}
                  className='lg:w-60 xl:w-70 bg-cover'
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Download */}
      <section className='border relative lg:h-175 w-full flex justify-center items-center'>
        <img
          className='w-full absolute -top-30 left-0'
          src={img28}
        />
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
                <img
                  src={qr}
                  className='w-[150px] h-[150px]'
                />

                <div className='flex flex-col justify-around'>
                  <Button variant='outline'>
                    <img
                      src={img22}
                      className='w-[160px] h-[55px]'
                    />
                  </Button>

                  <Button variant='outline'>
                    <img
                      src={img23}
                      className='w-[160px] h-[55px]'
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center w-full'>
            <img
              src={homeChef}
              className='w-[450px] h-[500px]'
            />
          </div>
        </div>
      </section>

      <Separator className='my-10' />

      <Footer />
    </div>
  );
};

export default WhyUs;

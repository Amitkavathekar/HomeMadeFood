import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

import shaniwarwada from '../assets/images/shaniwarwada.webp';
import deluxeMealPlan from '../assets/images/Deluxe-Meal-Plan-for-Tiffin-Servicepune.png';
import ecoFriendly from '../assets/images/eco-friendly-package.png';
import scooter from '../assets/images/scooter.png';
import setting from '../assets/images/setting.png';
import repeat from '../assets/images/repeat.png';
import howItWorkBackground from '../assets/images/howItWorkBackground.png';
import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import fourth from '../assets/images/4.png';
import five from '../assets/images/5.png';
import six from '../assets/images/6.png';
import Asset21 from '../assets/images/Asset21.webp';
import Asset22 from '../assets/images/Asset22.webp';
import Asset23 from '../assets/images/Asset23.webp';
import Asset24 from '../assets/images/Asset24.webp';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TiffinServiceInpune: React.FC = () => {
  const [count, setcount] = useState<number>(0);

  const taget = 200000;
  const speed = 5;

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1000;
      setcount(current);

      if (current >= taget) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  const cardData = [
    {
      id: 1,
      number: '01',
      image: one,
      heading: 'Download Mealawe App',
      description:
        'Download Mealawe app from iOS or Playstore. An app that has got all the traditional and regional flavours of India.',
    },
    {
      id: 2,
      number: '02',
      image: two,
      heading: 'Download Mealawe App',
      description:
        'Download Mealawe app from iOS or Playstore. An app that has got all the traditional and regional flavours of India.',
    },
    {
      id: 3,
      number: '03',
      image: three,
      heading: 'Download Mealawe App',
      description:
        'Download Mealawe app from iOS or Playstore. An app that has got all the traditional and regional flavours of India.',
    },
    {
      id: 4,
      number: '01',
      image: fourth,
      heading: 'Download Mealawe App',
      description:
        'Download Mealawe app from iOS or Playstore. An app that has got all the traditional and regional flavours of India.',
    },
    {
      id: 5,
      number: '02',
      image: five,
      heading: 'Download Mealawe App',
      description:
        'Download Mealawe app from iOS or Playstore. An app that has got all the traditional and regional flavours of India.',
    },
    {
      id: 6,
      number: '0',
      image: six,
      heading: 'Download Mealawe App',
      description:
        'Download Mealawe app from iOS or Playstore. An app that has got all the traditional and regional flavours of India.',
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section>
        <div className='w-full h-155 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-40 px-4 lg:px-10 py-10'>
          <div className='flex flex-col justify-center items-center lg:items-start w-full lg:w-[60%] text-center lg:text-left'>
            <p className='text-3xl sm:text-4xl font-thin w-full'>
              Mealawe - Homemade
            </p>
            <p className=' z-5 text-4xl sm:text-6xl md:text-7xl leading-tight text-[#63AB45] font-bold mt-3'>
              BEST TIFFIN SERVICE IN PUNE
            </p>
            <p className='text-[70px] sm:text-[120px] md:text-[150px] lg:text-[180px] mt-[-40px] sm:mt-[-80px] md:mt-[-110px] text-gray-200 font-bold w-full'>
              PUNE
            </p>
            <div className='w-full flex justify-center lg:justify-start'>
              <Button
                className='w-40 sm:w-48 lg:w-60 mt-6 h-14 sm:h-16 lg:h-20 rounded-3xl text-xl sm:text-2xl lg:text-3xl text-white font-bold hover:opacity-90 transition'
                style={{ backgroundColor: '#63AB45' }}
                label='Order Now'
              />
            </div>
          </div>
          <div>
            {' '}
            <img
              src={shaniwarwada}
              alt='Shaniwarwada'
              style={{ width: '800px', height: '550px' }}
              className=' mt-18 ml-10  w-[100%]  sm:w-[70%] md:w-[50%]  rounded-xl'
            />
          </div>
        </div>
      </section>
      {/* YOUTUBE SECTION */}
      <section className='w-full bg-[#63AB45] flex flex-col lg:flex-row justify-center items-center py-10'>
        <div className='flex flex-col lg:flex-row justify-between items-center w-[95%] gap-8'>
          <iframe
            width='100%'
            height='250'
            className='sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[350px] lg:w-[650px] lg:h-[400px] rounded-xl'
            src='https://www.youtube.com/embed/IWzjivzAzFQ'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
          <div className='w-full lg:w-[45%] text-center lg:text-left'>
            <q className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF]'>
              Delicious Homemade & Best Tiffin Service in Pune
            </q>
            <p className='text-xl sm:text-2xl md:text-3xl mt-5 text-[#FFFFFF] leading-relaxed'>
              "Subscribe to weekly, bi-weekly, and monthly plans from nearby
              family kitchens."
            </p>
            <Link to='/signup'>
              <Button
                className='w-44 sm:w-52 lg:w-60 mt-7 h-14 sm:h-16 lg:h-20 rounded-3xl text-2xl sm:text-3xl lg:text-4xl text-[#63AB45] font-bold hover:opacity-90 transition'
                style={{ backgroundColor: '#ffff' }}
                label='Order Now'
              />
            </Link>
          </div>
        </div>
      </section>
      {/* MISSION SECTION */}
      <section className='w-full bg-[#EAE2B7] py-10 px-4 flex flex-col lg:flex-row items-center justify-between'>
        <div className='w-full lg:w-[50%] flex flex-col justify-start gap-6'>
          <p className='text-4xl sm:text-5xl md:text-6xl font-bold text-[#63AB45]'>
            Mission Behind
          </p>
          <p className='text-[#63AB45] text-xl sm:text-2xl md:text-3xl font-extralight leading-relaxed'>
            Mealawe’s mission is to provide healthy homemade meals daily to
            everyone. Wholesome & complete tiffin service in Pune.
          </p>

          <div className='w-full mt-6 flex flex-col sm:flex-row items-center justify-between gap-6'>
            <div className='w-full sm:w-[45%] bg-white rounded-2xl flex flex-col gap-3 items-center justify-center py-5'>
              <p className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                {count}+
              </p>
              <p className='text-[#63AB45] text-lg sm:text-xl'>
                Homemade Meals Delivered
              </p>
            </div>

            <div className='w-full sm:w-[45%] bg-white rounded-2xl flex flex-col gap-3 items-center justify-center py-5'>
              <p className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                200000+
              </p>
              <p className='text-[#63AB45] text-lg sm:text-xl'>
                Homemade Meals
              </p>
            </div>
          </div>

          <Link to='/signup'>
            <Button
              className='w-44 sm:w-52 lg:w-60 mt-7 h-14 sm:h-16 lg:h-20 rounded-3xl text-2xl sm:text-3xl text-white font-bold hover:opacity-90 transition self-center lg:self-start'
              style={{ backgroundColor: '#63AB45' }}
              label='Order Now'
            />
          </Link>
        </div>

        <div className='w-full lg:w-[45%] flex justify-center items-center mt-10 lg:mt-0'>
          <img
            className='w-[80%] sm:w-[70%] md:w-[60%] lg:w-[90%] h-auto rounded-xl'
            src={deluxeMealPlan}
            alt='Deluxe Meal Plan'
          />
        </div>
      </section>
      {/* UNIQUE SERVICE SECTION */}
      <section className='w-full py-10'>
        <div className='flex items-center justify-center mb-10'>
          <p className='text-center text-4xl sm:text-5xl md:text-6xl font-bold text-[#63AB45]'>
            Our Unique Service
          </p>
        </div>

        <div className='flex flex-col lg:flex-row w-full'>
          {/* LEFT PART */}
          <div className='w-full lg:w-[50%] p-4'>
            <p className='text-center text-2xl sm:text-3xl md:text-4xl mb-6'>
              Why Choose <span className='font-bold '>Mealawe</span>?
            </p>

            <div className='flex flex-wrap justify-evenly gap-5'>
              {[
                {
                  img: ecoFriendly,
                  title: 'Eco-Friendly Packaging',
                  desc: 'Sustainable and biodegradable materials',
                },
                {
                  img: scooter,
                  title: 'Electric Delivery',
                  desc: 'Reducing carbon footprint with delivery',
                },
                {
                  img: setting,
                  title: 'Customization Options',
                  desc: 'Tailored meal plans to suit preferences',
                },
                {
                  img: repeat,
                  title: 'No Vegetable Repeats',
                  desc: 'Diversed menu with no repeats in a week',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='w-[45%] sm:w-[40%] border rounded flex flex-col items-center p-3 bg-white'
                >
                  <div className='h-[80px] flex justify-center items-center'>
                    <img
                      src={item.img}
                      alt={item.title}
                      className='max-h-full'
                    />
                  </div>
                  <p className='mt-2 font-bold text-center'>{item.title}</p>
                  <p className='bg-[#63AB45] text-white mt-2 p-2 rounded text-center text-sm sm:text-base'>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PART */}
          <div className='w-full lg:w-[50%] p-4'>
            <p className='text-center text-2xl sm:text-3xl md:text-4xl mb-6'>
              Our Biggest <span className='font-bold '>USP</span>?
            </p>

            {[1, 2].map((i) => (
              <div
                key={i}
                className='w-full border rounded mt-5 p-3 flex flex-col items-center bg-white'
              >
                <div className='h-[80px] flex justify-center items-center'>
                  <img
                    src={ecoFriendly}
                    alt='Eco Package'
                    className='max-h-full'
                  />
                </div>
                <p className='mt-2 font-bold text-center'>
                  Eco-Friendly Packaging
                </p>
                <p className='bg-[#63AB45] text-white mt-2 p-2 rounded text-center text-sm sm:text-base'>
                  Sustainable and biodegradable materials
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${howItWorkBackground})` }}
        className='w-full h-110 bg-cover bg-center'
      />
      <section>
        <div className='grid md:grid-cols-3 gap-6 p-6 relative'>
          {cardData.map((item) => (
            <Card
              key={item.id}
              className='hover:shadow-xl text-center transform -translate-y-[150px] h-[520px] w-[360px]'
            >
              <CardHeader>
                <CardTitle>{item.number}</CardTitle>
              </CardHeader>

              <CardContent>
                <img
                  src={item.image}
                  alt={item.heading}
                  className='w-full h-80 object-contain rounded-md'
                />

                <p className='mt-3 text-green-600 text-xl font-bold'>
                  {item.heading}
                </p>
                <p className='mt-3 text-gray-600'>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <p className='text-center text-5xl mt-0 font-bold'>
        Our Subscription Plans
      </p>
      <p className='text-center text-2xl  mt-5 font-bold'>
        One of the Best Tiffin Service in Pune
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        {[
          {
            cal: Asset21,
            img: Asset22,
            title: 'Weekly Plan',
          },
          {
            cal: Asset21,
            img: Asset22,
            title: 'Bi-Weekly Plan',
          },
          {
            cal: Asset21,
            img: Asset22,
            title: 'Monthly Plan',
          },
        ].map((item, index) => (
          <Card
            key={index}
            className='relative w-[280px] sm:w-[320px] h-[320px] border-2 border-green-500 rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-xl transition'
          >
            {/* Calendar Icon */}
            <img
              src={item.cal}
              alt='calendar'
              className='absolute -top-6 w-12 h-12'
            />

            <CardContent className='flex flex-col items-center justify-center gap-4'>
              {/* Food Image */}
              <img
                src={item.img}
                alt={item.title}
                className='w-40 h-40 object-contain'
              />

              {/* Title */}
              <h2 className='text-xl font-semibold text-green-600 text-center'>
                {item.title}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link to='/signup'>
        <div className='flex justify-center mt-5'>
          <Button
            className='w-50  m-auto h-12 rounded-3xl text-xl text-white font-bold hover:opacity-90 transition'
            style={{ backgroundColor: '#63AB45' }}
            label='Order Now'
          />
        </div>
      </Link>
      <div></div>
    </>
  );
};

export default TiffinServiceInpune;

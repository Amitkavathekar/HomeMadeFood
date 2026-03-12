import React from 'react';
import vector1 from '../assets/images/Vector-1.png';
import isolate from '../assets/images/Isolation_Mode.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Cardhome from '../components/Cardhome';
import StepsCompoent from '../components/StepsCompoent';
import StepsCompoentReverse from '../components/StepsCompoentReverse';
import Footer from '../components/Footer';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Images
import thali from '../assets/images/thali.webp';
import mobile from '../assets/images/mobile.webp';
import girlwiththali from '../assets/images/girlwiththali.webp';
import deliveryBoy from '../assets/images/delivery-boy.webp';
import imgi6 from '../assets/images/imgi_6_ui-elements-01 (1).webp';
import img3 from '../assets/images/3.webp';
import img2 from '../assets/images/2.webp';
import img4 from '../assets/images/4.webp';
import img5 from '../assets/images/5.webp';
import img6 from '../assets/images/6.webp';
import img7 from '../assets/images/7.webp';
import img8 from '../assets/images/8.webp';
import img9 from '../assets/images/9.webp';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';
import img12 from '../assets/images/12.jpg';
import appStore from '../assets/images/22.png';
import playStore from '../assets/images/23.png';

import logo14 from '../assets/images/14.png';
import logo15 from '../assets/images/15.webp';
import logo16 from '../assets/images/16.svg';
import logo17 from '../assets/images/17.png';
import logo18 from '../assets/images/18.png';
import logo19 from '../assets/images/19.png';
import logo20 from '../assets/images/20.png';

type BlogPost = {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  description: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Indian Spices Health Benefits',
    author: 'Mealawve Admin',
    date: 'Jan 22, 2023',
    category: 'People Health',
    description:
      'Indian spices are also known for their medicinal properties, such as antibiotic, boost metabolism, antioxidants, & ability to preserve food',
    image: img10,
  },
  {
    id: 2,
    title: 'Do I Need a License to Sell Homemade Food?',
    author: 'Mealawve Admin',
    date: 'Jan 21, 2023',
    category: 'Company',
    description:
      'An FSSAI food license is essential to run food business in India. It is even critical for F&B operators making less than Rs 12 Lakh annually',
    image: img12,
  },
  {
    id: 3,
    title: 'How to Start a Tiffin Service from Home?',
    author: 'Mealawve Admin',
    date: 'Jan 21, 2023',
    category: 'Women Power',
    description:
      'Some of the guidelines on how to start a tiffin service from home are obtaining FSSAI license, plan for dishes, register on mealawve, etc.',
    image: img11,
  },
];

const Home: React.FC = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      {/* HERO */}
      <section className='flex flex-col lg:flex-row justify-between items-center mt-7 w-full'>
        <div
          className='w-full lg:w-[48%] bg-contain bg-no-repeat flex items-center justify-center'
          style={{
            backgroundImage: `url(${vector1})`,
            backgroundPosition: 'left top',
          }}
        >
          <div className='w-full max-w-[560px] text-center lg:text-left p-4 lg:pl-12 lg:pr-4'>
            <p className='text-6xl font-bold'>100%</p>
            <p className='text-6xl font-bold text-[#63AB45]'>Homemade</p>
            <p className='text-6xl font-bold'>Food is</p>
            <p className='text-5xl font-semibold'>Waiting For You</p>

            <p className='text-lg mt-3'>
              You can get the best homemade food from your neighbourhood homes.
              The food will be full of soul, health, & taste.
            </p>

            <Link
              to='/signup'
              className='mt-6 inline-block'
            >
              <Button
                className='w-56 h-12 rounded-3xl text-lg text-white'
                style={{ backgroundColor: '#63AB45' }}
                label='Order Now'
              />
            </Link>
          </div>
        </div>

        <div
          className='w-full lg:w-[50%] flex justify-center items-center'
          style={{
            backgroundImage: `url(${isolate})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img
            className='h-[420px]'
            src={thali}
            alt='Homemade thali'
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className='mt-10 w-full px-4'>
        <div className='w-[75%] mx-auto text-center'>
          <p className='text-4xl font-bold mb-10'>
            We DO NOT serve food from
            <span className='text-[#E2394D]'> Restaurants!</span>
          </p>

          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <Cardhome
              heading='Mealawe Application'
              label='Download Mealawe app from iOS or Playstore.'
              src={mobile}
            />

            <Cardhome
              heading='No Restaurant'
              label='Home – made food served from nearby family kitchens.'
              src={girlwiththali}
            />

            <Cardhome
              heading='Reliable Home Delivery'
              label='Reliable door-to-door delivery.'
              src={deliveryBoy}
            />
          </div>
        </div>
      </section>

      {/* STEPS */}
      <p className='text-4xl text-center text-[#63AB45] font-bold mt-10'>
        Order in 4 simple steps
      </p>

      <section className='mt-10 w-full px-4 lg:px-8'>
        <div className='flex flex-wrap justify-center gap-8'>
          <StepsCompoent
            heading='Download Mealawe App'
            label='Download Mealawe app from iOS or Playstore.'
            src={img4}
          />

          <StepsCompoentReverse
            heading='Create Your Account'
            label='Create your profile with your mobile number.'
            src={img5}
          />

          <StepsCompoent
            heading='Order Homemade Food'
            label='Choose homemade food from various cuisines.'
            src={img6}
          />

          <StepsCompoentReverse
            heading='Food Delivery in Minutes'
            label='Get food delivered anywhere quickly.'
            src={img7}
          />
        </div>
      </section>

      {/* BLOG */}
      <section
        className='mt-20 py-12 px-4 bg-cover text-center'
        style={{
          backgroundImage: `url(${img9})`,
          backgroundPosition: 'center',
        }}
      >
        <h2 className='text-4xl font-bold mb-4'>Blog</h2>

        <p className='max-w-2xl mx-auto text-lg mb-6'>
          Mealawian writers are too passionate about sharing food knowledge.
        </p>

        <Button
          className='border border-[#63AB45] text-[#63AB45]'
          label='Read More'
        />

        {/* BLOG CARDS */}

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-10'>
          {blogPosts.map((e) => (
            <Card
              key={e.id}
              className='w-[90%] sm:w-72 overflow-hidden hover:shadow-2xl transition'
            >
              <img
                src={e.image}
                alt={e.title}
                className='h-48 w-full object-cover'
              />

              <CardHeader>
                <CardTitle>{e.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className='text-sm text-gray-500 mb-2'>
                  {e.author} | {e.date} | {e.category}
                </p>

                <p className='text-sm text-gray-600'>{e.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AS SEEN IN */}

      <p className='text-4xl text-center font-bold mt-12 mb-6'>As Seen In</p>

      <div className='flex flex-wrap justify-center gap-8 border-b pb-6'>
        {[logo14, logo15, logo16, logo17, logo18, logo19, logo20].map(
          (img, i) => (
            <img
              key={i}
              src={img}
              className='w-28 grayscale hover:grayscale-0 transition'
            />
          ),
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import vector1 from "../assets/images//Vector-1.png";
import isolate from "../assets/images/Isolation_Mode.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Cardhome from "../components/Cardhome";

import SignUp from "./../pages/SignUp";
import StepsCompoent from "../components/StepsCompoent";
import StepsCompoentReverse from "../components/StepsCompoentReverse";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section className="flex h-150 w-full justify-between  mt-7 ">
        <div
          className="h-[550px] w-[720px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${vector1})` }}>
          <div className=" ml-40 mt-20  h-120 w-140">
            <p className="text-7xl font-bold">100%</p>
            <p className="text-7xl font-bold text-[#63AB45]">Homemade</p>
            <p className="text-7xl font-bold">Food is</p>
            <p className="text-6xl font ">Waiting For You</p>
            <p className="text-xl  mt-2">
              You can get the best homemade food from your neighbourhood homes.
              The food will be full of soul, health, & taste.
            </p>
            <Link to="/signup">
              <Button
                className="w-65 mt-10 h-12 rounded-3xl text-2xl text-white hover:opacity-90 transition"
                style={{ backgroundColor: "#63AB45" }}
                label="Order Now"
              />
            </Link>
          </div>
        </div>
        <div
          className="h-[600px] w-[630px]  bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${isolate})` }}>
          <img
            className="h-148 w-135"
            src="/src/assets/images/thali.webp"
            alt=""
          />
        </div>
      </section>

      {/* Features section */}
      <section className=" h-150 mt-10  w-full ">
        <div className="w-[75%]  m-auto  h-[100%]">
          <p className=" flex text-4xl">
            <span className="m-auto font-bold ">
              We DO NOT serve food from{" "}
              <span className=" text-[#E2394D]">Restaurants!</span>
            </span>
          </p>

          <div className="flex justify-evenly gap-6">
            <Cardhome
              heading="Mealawe Application"
              label="Download Mealawe app from iOS or Playstore. No manual process; download, signup & place a homemade food order."
              src="/src/assets/images/mobile.webp"
            />
            <Cardhome
              heading="No Restaurant"
              label="Home – made food served from nearby family kitchens. They are families like yours. We do not partner with restaurants or dhaba."
              src="/src/assets/images/girlwiththali.webp"
            />
            <Cardhome
              heading="Reliable Home Delivery"
              label="We have a reliable door-to-door delivery. You can even place advance or subscription food orders. Our delivery takes care of the rest."
              src="/src/assets/images/delivery-boy.webp"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="h-70 w-full">
        <div className="w-full flex justify-center items-center py-12 px-6 bg-white">
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#63AB45]">Why Us?</span> – Because you are
              very
              <span className="block text-[#63AB45]">Special!</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              You will have every reason to count on us for healthy & tasty
              homemade food from nearby family kitchens. You will find a
              different concept & flavour while ordering home food from Mealawe.
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="h-480  flex justify-between  w-full">
        <div className="h-195 bg-contain  w-[45%]">
          <img src="/src/assets/images/imgi_6_ui-elements-01 (1).webp" alt="" />
          <div className="mt-5 flex justify-end">
            <div className="flex flex-col">
              <p className="text-[#63AB45] w-60 text-6xl">Advance Order</p>
              <p className="text-3xl w-80">
                You can order your choice of homemade food in advance for up to
                2 days. Now you can plan for a perfect weekend
              </p>
            </div>
          </div>

          <img
            className="h-195 bg-contain  mt-10 w-full"
            src="/src/assets/images/3.webp"
            alt=""
          />
        </div>

        <div className=" h-470 w-[45%]">
          <div className="mt-35">
            <p className="text-[#63AB45]  w-90 text-6xl">All Day Order</p>
            <p className="text-3xl w-80">
              Instant homemade food order during breakfast, lunch, high tea and
              dinne
            </p>
          </div>
          <div className="h-195 bg-contain  mt-30 w-full ">
            <img className="" src="/src/assets/images/2.webp" alt="" />
          </div>
          <div className="mt-30">
            <p className="text-[#63AB45]  w-110 text-6xl">Regional Snacks</p>
            <p className="text-3xl w-80">
              You can order a variety of your choice regional snacks such as
              pickles, papad, sweets, any side snacks, etc.
            </p>
          </div>
        </div>
      </section>

      <p className="w-full text-5xl text-center text-[#63AB45] font-bold">
        Order in 4 simple steps
      </p>

      {/* Order in 4 simple steps */}
      <section className="h-170 w-full ">
        <div className="w-[90%] m-auto mt-10 flex justify-between ">
          <StepsCompoent
            heading="Download Mealawe App"
            label="Download Mealawe app from iOS or Playstore. An app that has got all the traditional and regional flavours of India."
            src="/src/assets/images/4.webp"
          />
          <StepsCompoentReverse
            heading="Create Your Account
"
            label="Create your profile with the help of your mobile number. Set your email and cuisine preferences and you are good to go.

"
            src="/src/assets/images/5.webp"
          />
          <StepsCompoent
            heading="Order Homemade Food
"
            label="You can choose homemade food from a variety of cuisine. You can place daily as well as advance order."
            src="/src/assets/images/6.webp"
          />
          <StepsCompoentReverse
            heading="Food Delivery in Minutes"
            label="You will get the homemade food delivered at your home, office, or anywhere else in no time."
            src="/src/assets/images/7.webp"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

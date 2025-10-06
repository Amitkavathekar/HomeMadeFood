import Button from "../components/Button";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const TiffinServiceInpune = () => {
  const [count, setcount] = useState(0);
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

  return (
    <>
      <section>
        {/* hero section */}
        <div className="w-full h-155  flex justify-between items-center gap-40">
          <div className="h-80 ml-5  flex flex-col justify-center   items-center  w-70%">
            <p className="text-4xl font-thin text-left w-full">
              Mealawe - Homemade
            </p>
            <p className="text-7xl leading-20  z-1  text-[#63AB45] font-bold">
              BEST TIFFIN SERVICE IN PUNE
            </p>
            <p className="text-[180px] mt-[-130PX] text-gray-200 font-bold w-full">
              PUNE
            </p>
            <div className="w-full">
              <Button
                className="w-60 mt-10 ml-1 h-20 rounded-3xl text-3xl text-white font-bold hover:opacity-90 transition"
                style={{ backgroundColor: "#63AB45" }}
                label="Order Now"
              />
            </div>
          </div>

          <img src="/src/assets/images/shaniwarwada.webp" alt="" />
        </div>
      </section>

      <section className="h-140 w-full mt-[-15px]  flex bg-[#63AB45]">
        <div className="h-110  m-auto flex  justify-between items-center w-[95%] ">
          <iframe
            width="650"
            height="400"
            src="https://www.youtube.com/embed/IWzjivzAzFQ?list=TLGG22beIHSHiJgyOTA5MjAyNQ"
            frameborder="0"
            className="rounded-xl"
            allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <div className="h-100 w-[45%]">
            <q className="text-6xl font-bold text-[#FFFFFF]">
              Delicious Homemade & Best Tiffin Service in Pune
            </q>
            <br></br>
            <p className="text-3xl leading-12 mt-7! text-[#FFFFFF]">
              "Subscribe to weekly, bi-weekly, and monthly plans from nearby
              family kitchens."
            </p>
            <Link to="/signup">
              <Button
                className="w-60 mt-7 h-20 rounded-3xl text-4xl text-[#63AB45] font-bold hover:opacity-90 transition"
                style={{ backgroundColor: "#ffff" }}
                label="Order Now"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="h-160 w-full flex bg-[#EAE2B7]">
        <div className="w-full  h-150 m-auto gap-3 flex justify-between">
          <div className="flex w-[45%] p-5 flex-col justify-start ">
            <p className="text-6xl mt-3 font-bold text-[#63AB45] w-full">
              Mission Behind
            </p>
            <p className="text-[#63AB45] text-3xl mt-5 w-full font-extralight leading-12">
              Mealawe’s mission is to provide healthy homemade meals daily to
              everyone. Wholesome & complete tiffin service in Pune
            </p>
            <div className="w-full mt-15  h-30  flex items-center justify-between">
              <div className="h-30 w-[45%] rounded-2xl flex flex-col gap-5    items-center justify-center bg-[#ffff]">
                <p className="text-5xl font-bold">{count}+</p>
                <p className="text-[#63AB45] text-xl">
                  Homemade Meals Delivered
                </p>
              </div>
              <div className="h-30 w-[45%] rounded-2xl flex flex-col gap-5  items-center justify-center bg-[#ffff]">
                <p className="text-5xl font-bold">200000+</p>
                <p className="text-[#63AB45] text-xl">Homemade Meals</p>
              </div>
            </div>
            <Link to="/signup">
              <Button
                className="w-60 mt-7 h-20 rounded-4xl ml-6 text-3xl text-[#ffff] font-bold hover:opacity-90 transition"
                style={{ backgroundColor: "#63AB45" }}
                label="Order Now"
              />
            </Link>{" "}
          </div>
          <div className="w-[45%] flex justify-center items-center">
            <img
              className="h-130"
              src="/src/assets/images/Deluxe-Meal-Plan-for-Tiffin-Servicepune.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="h-175 w-full">
        <div class="h-20 flex items-center justify-center">
          <p class="text-center text-6xl font-bold text-[#63AB45]">
            Our Unique Service
          </p>
        </div>
        <div className="h-150 w-full flex">
          <div className="w-[50%] h-[100%] p-4 ">
            <p className="text-center text-4xl mt-15">
              Why Choose <span className="font-bold ">Mealawe</span>?
            </p>
            <div className="w-[100%] h-[70%] flex justify-evenly items-center flex-wrap ">
              <div className="h-[40%] w-[40%] border rounded">
                <div className="w-full h-[35%] flex justify-center items-center">
                  <img
                    src="/src/assets/images/eco-friendly-package.png"
                    alt="eco package"
                    className="block max-h-full"
                  />
                </div>

                <p className="w-full text-center mt-2 font-bold">
                  Eco-Friendly Packaging
                </p>

                <p className=" flex justify-center items-center h-[45%] rounded  bg-[#63AB45]">
                  <span className="w-[80%] text-center">
                    Sustainable and biodegradable{" "}
                    <span className="">materials</span>
                  </span>
                </p>
              </div>
              <div className="h-[40%] w-[40%] border rounded">
                <div className="w-full h-[35%] flex justify-center items-center">
                  <img
                    src="/src/assets/images/scooter.png"
                    alt="eco package"
                    className="block max-h-full"
                  />
                </div>

                <p className="w-full text-center mt-2 font-bold">
                  Electric Delivery
                </p>

                <p className=" flex justify-center items-center h-[45%] rounded  bg-[#63AB45]">
                  <span className="w-[80%] text-center">
                    Reducing carbon footprint with delivery
                  </span>
                </p>
              </div>
              <div className="h-[40%] w-[40%] border rounded">
                <div className="w-full h-[35%] flex justify-center items-center">
                  <img
                    src="/src/assets/images/setting.png"
                    alt="eco package"
                    className="block max-h-full"
                  />
                </div>

                <p className="w-full text-center mt-2 font-bold">
                  Customization Options
                </p>

                <p className=" flex justify-center items-center h-[45%] rounded  bg-[#63AB45]">
                  <span className="w-[80%] text-center">
                    Tailored meal plans to suit preferences
                  </span>
                </p>
              </div>
              <div className="h-[40%] w-[40%] border rounded">
                <div className="w-full h-[35%] flex justify-center items-center">
                  <img
                    src="/src/assets/images/repeat.png"
                    alt="eco package"
                    className="block max-h-full"
                  />
                </div>

                <p className="w-full text-center mt-2 font-bold">
                  No Vegetable Repeats
                </p>

                <p className=" flex justify-center items-center h-[45%] rounded  bg-[#63AB45]">
                  <span className="w-[80%] text-center">
                    Diversed menu with no repeats in a week
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-[50%] h-[100%] p-4 ">
            <p className="text-center text-4xl mt-15">
              Our Biggest <span className="font-bold ">USP</span>?
            </p>
            <div className="h-[30%] w-[100%] border rounded mt-5">
                <div className="w-full h-[35%] flex justify-center items-center">
                  <img
                    src="/src/assets/images/eco-friendly-package.png"
                    alt="eco package"
                    className="block max-h-full"
                  />
                </div>

                <p className="w-full text-center mt-2 font-bold">
                  Eco-Friendly Packaging
                </p>

                <p className=" flex justify-center items-center h-[45%] rounded  bg-[#63AB45]">
                  <span className="w-[80%] text-center">
                    Sustainable and biodegradable{" "}
                    <span className="">materials</span>
                  </span>
                </p>
            </div>
            <div className="h-[30%] w-[100%] border rounded mt-5">
                <div className="w-full h-[35%] flex justify-center items-center">
                  <img
                    src="/src/assets/images/eco-friendly-package.png"
                    alt="eco package"
                    className="block max-h-full"
                  />
                </div>

                <p className="w-full text-center mt-2 font-bold">
                  Eco-Friendly Packaging
                </p>

                <p className=" flex justify-center items-center h-[45%] rounded  bg-[#63AB45]">
                  <span className="w-[80%] text-center">
                    Sustainable and biodegradable{" "}
                    <span className="">materials</span>
                  </span>
                </p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TiffinServiceInpune;

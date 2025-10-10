import React, { useState } from "react";
import thali1 from "/src/assets/images/thali1.jpg";
import Button from "./../components/Button";
import { Link } from "react-router-dom";

const JoinUs = () => {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      mobile: "",
      pincode: "",
      city: "",
    });

  // Single handler with switch-case
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setFormData((prev) => ({
          ...prev,
          name:
            value
              .charAt(0)
              .toUpperCase() +
            value.slice(1),
        }));
        break;

      case "email":
        setFormData((prev) => ({
          ...prev,
          email: value.toLowerCase(),
        }));
        break;

      case "mobile":
        setFormData((prev) => ({
          ...prev,
          mobile: value,
        }));
        break;

      case "pincode":
        setFormData((prev) => ({
          ...prev,
          pincode: value,
        }));
        break;

      case "city":
        setFormData((prev) => ({
          ...prev,
          city: value,
        }));
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <section
        className="h-152 w-full bg-no-repeat bg-cover bg-black/50 bg-blend-overlay flex justify-center items-center"
        style={{
          backgroundImage: `url(${thali1})`,
        }}
      >
        <div className="text-4xl h-120 w-[70%] font-bold text-white p-4">
          Register as a Home-Chef Today{" "}
          <span className="text-[#60C5B9]">
            FREE*!{" "}
          </span>
          <div className="w-full gap-15 flex mt-10">
            {/* Form */}
            <form className="w-[50%] p-2 flex flex-col justify-around gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-400 bg-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-400 bg-white"
              />
              <input
                type="number"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-400 bg-white"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-400 bg-white"
              />
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full text-2xl p-2 pl-3 rounded-2xl outline-none text-gray-400 bg-white"
              >
                <option value="">
                  Choose Your City
                </option>
                <option value="Mumbai">
                  Mumbai
                </option>
                <option value="Pune">
                  Pune
                </option>
                <option value="Sangli">
                  Sangli
                </option>
              </select>
              <Link to="/signup">
                <Button
                  className="w-50 h-12 rounded-3xl text-2xl text-white font-bold hover:opacity-90 transition"
                  style={{
                    backgroundColor:
                      "#63AB45",
                  }}
                  label="Submit"
                />
              </Link>
            </form>

            {/* YouTube iframe */}
            <iframe
              className="w-[50%] h-[300px] rounded-2xl"
              src="https://www.youtube.com/embed/Auz4yNXT69E"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;

import React from "react";

const Cardhome = ({ src, heading, label }) => {
  return (
    <div className="h-[95%] w-85 mt-5 ">
      <img
        src={src}
        alt={heading}
        className="w-85 flex bg-contain h-95 object-contain rounded-md"
      />
      <p className="mt-2 font-bold text-xl ">{heading}</p>
      <p className="font-normal mt-2 ">{label}</p>
    </div>
  );
};

export default Cardhome;

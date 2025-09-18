import React from "react";

const StepsCompoent = ({ src, heading, label }) => {
  return (
    <div className="h-[95%] w-85 mt-5 ">
      <img
        src={src}
        alt={heading}
        className="w-85 flex bg-contain h-130 object-contain rounded-md"
      />
      <p className="mt-2 w-85 text-[#63AB45]   text-center font-bold text-xl ">
        {heading}
      </p>
      <p className="font-normal text-center w-75  mt-2 ">{label}</p>
    </div>
  );
};

export default StepsCompoent;

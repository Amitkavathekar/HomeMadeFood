import React from 'react';

const StepsCompoentReverse = ({ src, heading, label }) => {
  return (
    <div className='h-[95%] w-85 mt-5 '>
      <p className='mt-2 w-85  text-[#63AB45] text-center font-bold text-xl '>
        {heading}
      </p>
      <p className='font-normal text-center w-75  mb-2 '>{label}</p>
      <img
        src={src}
        alt={heading}
        className='w-85 flex bg-contain h-130 object-contain rounded-md'
      />
    </div>
  );
};

export default StepsCompoentReverse;

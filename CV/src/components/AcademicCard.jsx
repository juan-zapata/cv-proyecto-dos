import React from 'react';

const AcademicCard = ({
  qualification,
  institution,
  period = 'In progress',
}) => (
  <div className='flex flex-col justify-between w-full lg:w-1/2 h-40 md:h-48 bg-white shadow-xl p-4 mt-14 lg:mx-3'>
    <div>
      <h2 className='text-gray-3 text-2xl md:text-4xl font-extrabold'>
        {qualification}
      </h2>
      <h3 className='text-gray-4 text-xl font-medium md:text-2xl'>
        {institution}
      </h3>
    </div>
    <div>
      <small className='text-gray-5 text-lg md:text-xl font-normal'>
        {period}
      </small>
    </div>
  </div>
);

export default AcademicCard;

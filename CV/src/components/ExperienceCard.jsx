import React from 'react';

const ExperienceCard = ({ title, description, year, company, companyLink }) => (
  <div className='relative p-4 shadow-md bg-white mx-4 my-16'>
    <h1 className='absolute -top-8 -left-8 md:-left-8 md:-top-8 text-2xl text-gray-6 font-bold'>
      {year}
    </h1>
    <h1 className='text-xl md:text-4xl  font-bold text-gray-900 -mb-1'>
      {title}
    </h1>
    <a
      href={companyLink}
      target='_blank'
      rel='noopener noreferrer'
      className='text-gray-700 text-sm md:text-xl font-medium'
    >
      {company}
    </a>
    <p className='text-gray-2 text-sm md:text-base font-normal my-2 mt-5'>
      {description}
    </p>
  </div>
);

export default ExperienceCard;

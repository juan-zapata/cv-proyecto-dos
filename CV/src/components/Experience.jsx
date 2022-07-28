import React from 'react';
import ExperienceCard from 'components/ExperienceCard';

const Experience = () => (
  <div id='experience'>
    <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 text-center md:text-left md:mx-6 lg:mx-8 mt-10 md:mb-5'>
      Experience
    </h1>
    <div className='max-w-xl md:max-w-2xl mx-auto px-10 pb-10 pt-5 md:p-1'>
      <ExperienceCard
        title='Backend Developer'
        description='Desarrollador Java con Spring Boot'
        year={2022}
        company='Onnovacion'
        companyLink='https://onnovacion.com/'
      />
      <ExperienceCard
        title='Analista desarrollador'
        description='Desarrollador FullStack con con Java y angular'
        year={2022}
        company='Softcaribbean'
        companyLink='https://www.softcaribbean.com/'
      />
      <ExperienceCard
        title='QA automatizador'
        description='Analista de calidad con enfasis en automatización'
        year={2021}
        company='TATA'
        companyLink='https://www.tata.com/'
      />
    </div>
  </div>
);

export default Experience;

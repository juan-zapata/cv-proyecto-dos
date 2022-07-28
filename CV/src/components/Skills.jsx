import React from 'react';
import SkillProgressBar from 'components/SkillProgressBar';

const Skills = () => (
  <div id='skills'>
    <div className='flex flex-col bg-white md:mx-6 lg:mx-8 p-9'>
      <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 text-center md:text-left mb-8 lg:ml-14'>
        Skills
      </h1>
      <div className='md:px-16 lg:px-40'>
        <SkillProgressBar skillName='Relational DBS' progressPercentage={50} />
        <SkillProgressBar skillName='Java' progressPercentage={60} />
        <SkillProgressBar skillName='Spring Boot' progressPercentage={60} />
        <SkillProgressBar skillName='Angular' progressPercentage={40} />
      </div>
    </div>
  </div>
);

export default Skills;

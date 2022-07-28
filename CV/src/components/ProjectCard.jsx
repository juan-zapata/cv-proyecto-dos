import React from 'react';

const ProjectCard = ({ picture, projectName, technologies, projectLink }) => (
  <div className='overflow-hidden shadow-2xl rounded-sm bg-white'>
    <img
      className='w-full border-2 border-gray-200 rounded-sm'
      src={picture}
      alt='Project'
    />
    <div className='px-6 py-4'>
      <div className='font-bold text-2xl mb-1 text-gray-900'>{projectName}</div>
      <p className='font-normal text-base text-gray-800'>{technologies}</p>
    </div>
    <div className='px-6 pt-4 pb-4 text-center'>
      <a
        href={projectLink}
        target='_blank'
        rel='noopener noreferrer'
        className=' hover:underline hover:decoration-white'
      >
        <span className='bg-gray-700 rounded-full px-5 py-1 text-base font-normal text-white mr-2 mb-2'>
          View project
        </span>
      </a>
    </div>
  </div>
);

export default ProjectCard;

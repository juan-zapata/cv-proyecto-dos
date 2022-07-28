import React from 'react';
import Picture from 'assets/foto.jpg';

const About = () => (
  <div id='about'>
    <div className='flex flex-col h-96 my-24 justify-center items-center'>
      <div>
        <img
          src={Picture}
          alt='juan pic'
          className='w-44 h-44 rounded-full object-cover drop-shadow-2xl'
        />
      </div>
      <div>
        <h2 className='text-3xl text-center font-bold text-gray-1 my-3'>
          Juan Jose Zapata Monsalve
        </h2>
      </div>
      <div className='w-3/5 lg:w-5/12'>
        <p className='text-base text-center leading-6 font-normal text-gray-2'>
          Soy estudiante de decimo semestre de ingenieria de sistemas
          universidad de antioquia, actualemente trabajo como·Java Developer con
          con SpringBoot como framework en Onnovación
        </p>
      </div>
    </div>
  </div>
);

export default About;

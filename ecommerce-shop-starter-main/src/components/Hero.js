import React from 'react';
import WomenImg from '../img/woman_hero.png';
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
  <selection classname='bg-blue-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/*Chu*/}
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New trend
        </div>
        {/*Ten De*/}
        <h1 className='text-[70px] leading-[1,1] font-light mb-4'>
          Autumn Sale Stylish<br/>
          <span className='font-semibold'>Womens</span>
        </h1>
        <Link to='/' className='seft-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
      </div>
      {/*hinh*/}
      <div className='hiddwn lg:block'>
        <img src={WomenImg} alt=''/>
      </div>
    </div>
  </selection>
  );
};

export default Hero;

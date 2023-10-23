import React from 'react';
import Image from 'next/image';
import guiding from '../images/guiding.png';

const Guiding = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start p-8 bg-gray-200 mt-12">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
        <div className="w-full h-auto">
          <Image src={guiding} alt="Guiding" layout="responsive" className='right-left-animation' />
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:ml-4 p-6 rounded-lg ">
        <div className="w-full mb-4">
          <h1 className='text-3xl md:text-4xl text-blue-900 mb-3'>
            Guiding The Young Generation To Success.</h1>
          <p className="my-7 leading-7">Operating since 1996, Kindori Kindergarten provides quality early childhood education through its three year old and four year old group kindergarten programs. Our primary focus is the wellbeing of every child. We provide our children the attention they need to grow and develop into happy, healthy people and be confident for school.</p>
        </div>
        <div className="flex flex-col lg:flex-row my-10">
          <div className="w-full lg:w-1/2 lg:mr-2 mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Our Vision</h2>
            <p className='leading-7 my-6'> We acknowledge that all members of our community including children, families and teachers have rights and all interactions.</p>
          </div>
          <div className="w-full lg:w-1/2 lg:ml-2 ">
            <h2 className="text-lg font-semibold mb-2">Our Mission</h2>
            <p className='leading-7 my-6'>Kindori Kindergarten is a vibrant learning community where families, staff and The University of Queensland work together.</p>
          </div>
        </div>
        <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-blue-500 rounded-full mt-4">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default Guiding;


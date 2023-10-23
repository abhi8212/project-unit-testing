import React from 'react';
import Image from 'next/image';
import kidl from '../images/kidl.png';
import kidr from '../images/kidr.png';
import l1 from '../images/l1.png';
import amid from '../images/amid.png'
import l2 from '../images/l2.png';
import l3 from '../images/l3.png';
const Activities = () => {
  return (
    <div className='w-full'>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-center p-8 mt-5">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <div className="w-full h-auto animate-bounce">
            <Image src={kidr} alt="Right Kid" width={100} height={100} />
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:ml-4 p-6 rounded-lg text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold my-2">Things For Goods</h3>
            <h1 className="text-2xl  mb-2 my-2 ">Kids Activities</h1>
            <p>
              Infant classroom offers strategies for building positive relationships, helping children develop self-regulation and responding to challenging behaviors.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:ml-4 mb-4 lg:mb-0">
          <div className="w-full h-auto animate-bounce">
            <Image src={kidl} alt="Left Kid" width={100} height={100} className="ml-60" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center px-4">
        {/* Left Section */}
        <div className="w-full lg:w-1/3  lg:pr-8 ">
          <div className="px-6 rounded-lg  mb-6 flex items-center">
            <div>
              <h1 className="text-xl  mb-2">Creative Activities</h1>
              <p className="text-gray-700 pr-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere id praesentium ullam?
              </p>
            </div>
            <div className=" rounded-full mr-1 w-1/2 mb-8 border-dotted border-2 border-green-800  p-1 hover:animate-spin">
              <Image src={l1} alt="Profile image" className="rounded-full p-2  bg-green-800 w-full" />
            </div>
          </div>
          <div className="p-6 rounded-lg  mb-8 flex items-center">
            <div>
              <h1 className="text-xl  mb-2">Creative Activities</h1>
              <p className="text-gray-700 pr-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere id praesentium ullam?
              </p>
            </div>
            <div className=" rounded-full mr-1 w-1/2 mb-8 border-dotted border-2 border-red-800  p-1 hover:animate-spin">
              <Image src={l2} alt="Profile image" className="rounded-full p-2  bg-red-800 w-full animate-none disabled:animate-spin no-spin" />
            </div>
          </div>
          <div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full lg:w-1/3 p-4 mb-4 lg:mb-0">
          <Image src={amid} alt="Kid" className="rounded-lg" />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 p-4 lg:pr-8">
          <div className=" px-6 rounded-lg  mb-6 flex items-center">
            <div>
              <h1 className="text-xl  mb-2">Creative Activities</h1>
              <p className="text-gray-700 pr-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere id praesentium ullam?
              </p>
            </div>
            <div className="rounded-full mr-1 w-1/2 mb-8 border-dotted border-2 border-pink-800  p-1 hover:animate-spin">
              <Image src={l3} alt="Profile image" className="rounded-full p-2  bg-pink-800 w-full" />
            </div>
          </div>

          <div className=" p-6 rounded-lg  mb-6 flex items-center">
            <div>
              <h1 className="text-xl mb-2">Creative Activities</h1>
              <p className="text-gray-700 pr-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere id praesentium ullam?
              </p>
            </div>
            <div className=" rounded-full mr-1 w-1/2 mb-8 border-dotted border-2 border-green-800  p-1 hover:animate-spin">
              <Image src={l3} alt="Profile image" className="rounded-full p-2  bg-yellow-800 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;

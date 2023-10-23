import React from 'react';
import Image from 'next/image';
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';
import d3 from '../images/d3.png';
import d4 from '../images/d4.png';

const images = [
  { pic: d1, alt: 'pic' },
  { pic: d2, alt: 'pic' },
  { pic: d3, alt: 'pic' },
  { pic: d4, alt: 'pic' },
];
const Discover = () => {
  return (
    <div className="w-full py-8 text-center bg-yellow-50">
      <h1 className="text-4xl md:text-5xl text-blue-950 my-12">Discover Our Images</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {images.map((image, index) => (
          <div key={index} className="relative group" data-testid="image-container">
            <div className="group flex justify-center text-center relative overflow-hidden cursor-pointer py-6 px-2">
              <Image src={image.pic} alt={image.alt} objectFit="cover" layout="responsive" className="rounded-md object-cover ease-in-out duration-500 group-hover:translate-y-1 group-hover:scale-110"   width={500} // You can adjust this width
                  height={500} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-60  hover: bg-red-400  ease-in-out delay-150">            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-white border-19 border-white rounded-full bg-black" data-testid="plus-icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;

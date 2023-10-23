import React from 'react';
import Image from 'next/image';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';

const data = [
  { id: 1, name: 'Learn And Play', role: 'With the criteria of playing and learning together, children will have a comfortable.', image: c1, bgColor: 'bg-blue-500 ', border: ' border-blue-700' },
  { id: 2, name: 'Nutritious Meal', role: 'Children meals need to be provided with all the nutrients necessary for a day of play.', image: c2, bgColor: 'bg-green-500', border: 'border-green-700' },
  { id: 3, name: 'Great Teachers', role: 'Experienced and dedicated teachers team will help your child develop more in all aspects.', image: c3, bgColor: 'bg-yellow-500', border: 'border-yellow-700' },
  { id: 4, name: 'Cute Environment', role: 'The colorful environment at Kindori is suitable for children’s age, making them more accessible.', image: c4, bgColor: 'bg-pink-500', border: 'border-pink-700' }
];
const WhyChoose = () => {
  return (
    <div className="container mx-auto py-10 m-2 px-8">
      <div className="mb-10 justify-center text-center ">
        <h3 className="text-xl my-2"> Why Choose Us</h3>
        <h1 className='text-4xl md:text-5xl text-blue-950 mb-3'>Our Core Values</h1>
        <p className=' md:text-base leading-relaxed font-serif px-20 '>
          With kindori, we always put the quality of teaching children first, please rest assured when sending children at kindori kindergarten.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8  w-auto">
        {data.map(item => (
          <div key={item.id} className={` transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-6 rounded-lg shadow-lg text-white ${item.bgColor} ${item.border} border-b-4 text-center my-3`}>
            <div className="flex justify-center mb-4">
              <div className=" rounded-full mr-1  mb-8 border-dotted border-2 border-black-800  p-1 hover:animate-spin">
                <Image src={item.image} alt="Profile image" className="rounded-full  w-full " />
              </div>
            </div>
            <h5 className="text-xl font-bold mb-2">{item.name}</h5>
            <p className="text-sm text-white">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WhyChoose;

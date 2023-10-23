"use client"
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import a1 from '../images/a1.png';
import play from '../images/play.png';

const Accordion = () => {
  const faqData = [
    {
      question: 'First School (1 - 2 Years)',
      answer: 'Although the first school is a lot of surprises, it is the first step for a comprehensive development in all aspects. By creating a safe, consistent and welcoming environment, we help Our school follows the guidelines of the local school district.',
      pic: a1,
      bg: 'bg-yellow-600',
      logo: 'bg-yellow-600',
    },
    {
      question: 'First School (1 - 2 Years)',
      answer: 'Although the first school is a lot of surprises, it is the first step for a comprehensive development in all aspects. By creating a safe, consistent and welcoming environment, we help Our school follows the guidelines of the local school district.',
      pic: a1,
      bg: 'bg-yellow-600',
      logo: 'bg-yellow-600',
    },
    {
      question: 'First School (1 - 2 Years)',
      answer: 'Although the first school is a lot of surprises, it is the first step for a comprehensive development in all aspects. By creating a safe, consistent and welcoming environment, we help Our school follows the guidelines of the local school district.',
      pic: a1,
      bg: 'bg-yellow-600',
      logo: 'bg-yellow-600',
    },
    {
      question: 'First School (1 - 2 Years)',
      answer: 'Although the first school is a lot of surprises, it is the first step for a comprehensive development in all aspects. By creating a safe, consistent and welcoming environment, we help Our school follows the guidelines of the local school district.',
      pic: a1,
      bg: 'bg-yellow-600',
      logo: 'bg-yellow-600',
    },
     {
      question: 'First School (1 - 2 Years)',
      answer: 'Although the first school is a lot of surprises, it is the first step for a comprehensive development in all aspects. By creating a safe, consistent and welcoming environment, we help Our school follows the guidelines of the local school district.',
      pic: a1,
      bg: 'bg-yellow-600',
      logo: 'bg-yellow-600',
    },
    
  
    // Add your other FAQ items here
  ];

  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));

  const toggleAccordion = (index:any) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className='flex flex-col lg:flex-row w-full mt-9'>
      <div className="relative bg-slate-800 py-10 lg:w-1/2 mx-2">
        <div className="mx-auto">
          <div className="mb-20 mt-20 px-6">
            <h3 className="text-lg">Our Program</h3>
            <h1 className="text-4xl mb-4 text-white">Smarty Programs</h1>
            <p className="text-base mr-4 text-white">
              Dear parents, we would like to thank you for choosing the Kindori Preschool System in the process of considering and planning your children
            </p>
          </div>
        </div>
        <div className="mx-auto relative bg-white rounded-2xl mr-3 z-10">
          {faqData.map((item, index) => (
            <div key={index} className="">
              <div className="flex justify-start items-center p-3 cursor-pointer border-b-2" onClick={() => toggleAccordion(index)}
              data-testid="accordion-question">
                <div className="bg-red-500 p-2 rounded-full">
                  <Image src={item.pic} alt="img" width={32} height={32} />
                </div>
                <div className="font-bold ml-3 font-serif">{item.question}</div>
                <div className="flex-grow" />
                <div className={`text-white p-2 rounded-full ${item.bg}`}>
                  {isOpen[index] ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <div className={isOpen[index] ? 'block p-4' : 'hidden'}
               data-testid="accordion-answer">
                <div className="text-gray-700 font-serif">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center lg:w-1/2'>
        <div className='w-3/4'>
          <Image src={play} alt='play' />
        </div>
      </div>
    </div>
  );
};

export default Accordion;

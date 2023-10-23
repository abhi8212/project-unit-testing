"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import t1 from '../images/t1.png'

const testimonialData = [
  {
    id: 1,
    pic: t1,
    name:'John Doe',
    comment:'Lets explore what Parents have to say about us. Let us know what you think of todays newsletter and what youd like to.'
  },
  {
    id: 2,
    pic: t1,
    name: 'Jane Smith',
    comment: 'I have been using Tailwind CSS with Next.js and the slider feature for testimonials is fantastic. It allows me to showcase client feedback in an engaging and dynamic way.',
  },
  {
    id: 3,
    pic: t1,
    name: 'Jane Smith',
   comment: 'I have been using Tailwind CSS with Next.js and the slider feature for testimonials is fantastic. It allows me to showcase client feedback in an engaging and dynamic way.',
  },
  {
    id: 4,
    pic: t1,
    name: 'Jane Smith',
   comment: 'I have been using Tailwind CSS with Next.js and the slider feature for testimonials is fantastic. It allows me to showcase client feedback in an engaging and dynamic way.',
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,  // Display 2 slides on larger screens
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,  // Adjust the breakpoint based on your design
        settings: {
          slidesToShow: 1,  // Display 1 slide on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-gray-100 mr-7 w-auto pb-8 lg:ml-4 p-6 rounded-lg text-center' data-testid="testimonial-slider">
      <div className="mb-7 justify-center text-center  py-9">
        <h3 className="text-xl my-2">WHAT DO PARENTS SAY ABOUT US</h3>
        <h1 className='text-4xl md:text-5xl text-blue-950 mb-3'>Testimonial</h1>
        <p className=' md:text-base leading-relaxed font-serif px-20 '>
          Lets explore what Parents have to say about us. Let us know what you think of todays newsletter and what youd like to.
        </p>

      </div>
      <Slider {...settings}>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="max-w-lg ml-8 rounded-lg shadow-lg p-6 mt-10 bg-white">
            <div className="flex items-center mb-4">
              <Image src={testimonial.pic} alt="Right Kid" width={100} height={100} className="rounded-full h-16 w-16 object-cover mr-4" />
              <div>
                <div className="text-xl font-bold">{testimonial.name}</div>
                <div className="flex items-center mt-1">
                  <div className="text-yellow-500 mr-2">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <div className="text-gray-600">5.0</div>
                </div>
              </div>
            </div>
            <p className="text-gray-800 text-base mb-4 px-4">
              {testimonial.comment}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;

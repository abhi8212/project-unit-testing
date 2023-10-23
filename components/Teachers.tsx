import Image from 'next/image';
import React from 'react';
import t1 from "../images/t1.png"
import t2 from "../images/t2.png"
import t3 from "../images/t3.png"
import { FaInstagram, FaTwitter, FaFacebook, FaSkype } from 'react-icons/fa';
import Link from 'next/link';

const data = [
  { id: 1, name: 'Learn And Play', role: 'teacher', image: t1, insta: "https://www.instagram.com", facbook: "https://www.instagram.com", twitter: "https://www.instagram.com", skype: "https://www.instagram.com" },
  { id: 2, name: 'Nutritious Meal', role: 'principal', image: t2, insta: "https://www.instagram.com", facbook: "https://www.instagram.com", twitter: "https://www.instagram.com", skype: "https://www.instagram.com" },
  { id: 3, name: 'Great Teachers', role: 'coordinator', image: t3, insta: "https://www.instagram.com", facbook: "https://www.instagram.com", twitter: "https://www.instagram.com", skype: "https://www.instagram.com" },
];

const Card = () => {
  return (
    <div>
      <div className="lg:ml-4 p-6  text-center overflow-x-hidden">
        <div className="my-7 justify-center text-center ">
          <h3 className="text-xl my-2">About The Teachers</h3>
          <h1 className='text-4xl md:text-5xl text-blue-950 mb-3'>Our Teachers</h1>
          <p className='md:text-base leading-relaxed font-serif px-20'>
          We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  items-center justify-center">
        {data.map(item => (
          <div key={item.id} className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 max-w-sm mx-auto md:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden mb-4">
            {/* Image */}
            <div className="relative p-4">
              {/* Replace with your image */}
              <Image src={item.image} alt="Profile Image" layout="responsive" width={300} height={300} />
            </div>
            {/* Content */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-lg mb-2">{item.role}</p>

              {/* Social Media Links */}
              <div className="flex justify-around my-4">
                <Link data-testid={`instagram-link-${item.id}`}  href={item.insta} target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-orange-600">
                  <FaInstagram className="text-4xl p-2 text-white" />
                </Link>
                <Link data-testid={`twitter-link-${item.id}`} href={item.twitter} target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-green-600">
                  <FaTwitter className="text-white text-4xl p-2" />
                </Link>
                <Link data-testid={`facebook-link-${item.id}`} href={item.facbook} target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-yellow-600">
                  <FaFacebook className="text-4xl p-2 text-white" />
                </Link>
                <Link data-testid={`skype-link-${item.id}`} href={item.skype} target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-red-600">
                  <FaSkype className="text-4xl p-2 text-white" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import Image from 'next/image';
import c from '../images/c.png';

const circles = [
  { id: 1, logo: c, content: '365 +', type: 'Class Room' },
  { id: 2, logo: c, content: '223 +', type: 'Teacher' },
  { id: 3, logo: c, content: '123 +', type: 'Computers' },
  { id: 4, logo: c, content: '400 +', type: 'Rooms' },
];
const DottedCircle: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-lime-400">
      <div className="flex flex-wrap justify-center">
        {circles.map((circle) => (
          <div key={circle.id} className="flex flex-col items-center mx-4 mb-8 ">
            <div className="w-60 h-60 md:w-50 md:h-60 lg:w-60 lg:h-60 border-9 border-white  rounded-full flex items-center justify-center border-dotted border-2">
              <Image src={circle.logo} alt="Logo" width={80} height={80} />
              <div className="mt-2 text-center ">
                <h3 className="text-lg font-bold disabeled:hover:animate-spin text-white">{circle.content}</h3>
                <p className="text-sm text-white">{circle.type}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DottedCircle;

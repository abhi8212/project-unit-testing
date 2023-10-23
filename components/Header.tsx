import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram, FaTwitter, FaFacebook, FaSkype } from 'react-icons/fa';
import { faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-white py-4 px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:flex-grow md:items-center">
        <div className="flex space-x-4 pt-2">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2 w-3" />
            <span className="text-xs md:text-sm">123-456-7890</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 w-3" />
            <span className="text-xs md:text-sm">123 Address St, City, State</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-2 w-3" />
            <span className="text-xs md:text-sm">Mon - Fri: 9am - 6pm</span>
          </div>
        </div>
      </div>
      {/* Conditionally hide the right-side content on small screens */}
      <div className="hidden md:flex justify-center md:justify-end w-1/3">
        <div className="flex justify-around mx-4 space-x-2">
          <Link  data-testid="instagram-icon" href="/" target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-orange-600">
            <FaInstagram className="text-2xl md:text-4xl p-2 text-white"  />
          </Link>
          <Link  data-testid="twitter-icon" href="/" target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-green-600">
            <FaTwitter className="text-2xl md:text-4xl p-2 text-white" />
          </Link>
          <Link  data-testid="facebook-icon" href="/" target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-yellow-600">
            <FaFacebook className="text-2xl md:text-4xl p-2 text-white" />
          </Link>
          <Link  data-testid="skype-icon"  href="/" target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-red-600">
            <FaSkype className="text-2xl md:text-4xl p-2 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

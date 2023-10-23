"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import company from '../images/company.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div
      
      className='sticky top-0 z-10 ease-in duration-300 bg-white'
    >
      <div className='max-w-[100vw] m-auto flex justify-between items-center p-4 text-blue-800'>
        <Link href='/'>
          <Image src={company} alt='Company Logo' className='w-auto inline ' />
        </Link>
        <ul 
        className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/'>Pages</Link>
          </li>
          <li
            className={`relative p-4 ${isDropdownOpen ? 'hover:dropdown-open' : ''}`}
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <div className='flex items-center cursor-pointer'>
              Classes {isDropdownOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
            </div>
            {isDropdownOpen && (
              <div className='absolute top-full left-0 w-40 py-2 bg-white text-black   shadow-2xl rounded-2xl'>
                <ul>
                  <li className='p-2'>
                    <Link href='/classes/class 1'>Class 1</Link>
                  </li>
                  <li className='p-2'>
                    <Link href='/classes/class 2'>Class 2</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className='p-4'>
            <Link href='/'>Teacher</Link>
          </li>
          <li className='p-4'>
            <Link href='/'>Blogs</Link>
          </li>
        
        </ul>

        {/* Mobile Button */}
        <div data-testid = {'mobile-button'} onClick={handleNav} className='block sm:hidden z-10  bg-gray-800'>
          {nav ? (
            <AiOutlineClose size={20}
            
              />
          ) : (
            <AiOutlineMenu size={20} 
    
             />
          )}
        </div>
        {/* Mobile Menu */}
        <div data-testid = {'mobile-menu'}
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/'>Page</Link>
            </li>

            <li
              onClick={handleDropdownToggle}
              data-testid = {'dropdown'}
              className={`relative p-4 text-2xl text-white ${isDropdownOpen ? 'hover:dropdown-open' : ''}`}
            >
              <div className='flex items-center cursor-pointer'>
                    Classes{isDropdownOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
              </div>
              {isDropdownOpen && (
                <div className='absolute top-full left-0 w-full py-2 bg-black text-white rounded-2xl'>
                  <ul>
                    <li className='p-2 text-white'>
                      <Link href='/classes/class1'>class 1</Link>
                    </li>
                    <li className='p-2 text-white'>
                      <Link href='/classes/category2'>class 2</Link>
                    </li>
                
                  </ul>
                </div>
              )}
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/teacher'>Teacher</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/'>Shop</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/'>Blogs</Link>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'wouter';
import { IconHome, IconContact, IconAbout } from '@/assets/Icons.jsx';

export const NavBar = () => {
  return (
    <header className='flex w-full items-center sm:my-10 md:my-12'>
      <nav className='nav fixed ml-auto w-full bg-gray-400/30 pb-2 shadow-md shadow-black/30  backdrop-blur-sm max-sm:fixed max-sm:bottom-0 sm:top-0'>
        <ul className='flex flex-row max-sm:justify-evenly sm:mt-2 sm:space-x-8 sm:px-4 sm:pt-2 md:mt-0 md:mr-4 md:pt-2 lg:mr-8 lg:pt-1'>
          <li className='block px-1 py-1 font-medium hover:scale-110 hover:cursor-pointer hover:bg-white/80 hover:text-black/70 md:p-2 lg:px-4'>
            <Link to='/'>
              <span className='mt-2 inline-flex text-center lg:mx-0 lg:px-8'>
                <span className='max-sm:space-x-12'>
                  <IconHome />
                </span>
                <span className='pl-2 max-sm:hidden'>Inicio</span>
              </span>
            </Link>
          </li>
          <li className='block px-1 py-1 font-medium hover:scale-110 hover:cursor-pointer hover:bg-white/80 hover:text-black/70 md:p-2 lg:px-4'>
            <Link to='/contact'>
              <span className='mt-2 inline-flex text-center lg:mx-0 lg:px-8'>
                <span className='max-sm:space-x-12'>
                  <IconContact />
                </span>
                <span className='pl-2 max-sm:hidden'>Contactos</span>
              </span>
            </Link>
          </li>
          <li className='block px-1 py-1 font-medium hover:scale-110 hover:cursor-pointer hover:bg-white/80 hover:text-black/70 md:p-2 lg:px-4'>
            <Link to='/about'>
              <span className='mt-2 inline-flex text-center lg:mx-0 lg:px-8'>
                <span className='max-sm:space-x-12'>
                  <IconAbout />
                </span>
                <span className='pl-2 max-sm:hidden'>Informacion</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;

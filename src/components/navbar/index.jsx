import React from 'react';
import { Link } from 'wouter';
import logo from '@/assets/react.svg';

export const NavBar = () => {
  return (
    <header className='mb-2 flex items-center rounded bg-white  pb-2 shadow-md shadow-black/30 md:pb-4'>
      <div className='flex'>
        <Link
          to='/'
          style={{ padding: 5 }}
        >
          <img
            src={logo}
            alt='Logo'
          />
        </Link>
      </div>
      <nav className='nav ml-auto'>
        <ul className='flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:mr-4 md:pt-0 lg:mr-8'>
          <li className='block px-4 py-1 font-medium md:p-2 lg:px-4'>
            <Link
              to='/'
              style={{ padding: 5 }}
            >
              Inicio
            </Link>
          </li>
          <li className='block px-4 py-1 font-medium md:p-2 lg:px-4'>
            <Link
              to='/contact'
              style={{ padding: 5 }}
            >
              Contacto
            </Link>
          </li>
          <li className='block px-4 py-1 font-medium md:p-2 lg:px-4'>
            <Link
              to='/about'
              style={{ padding: 5 }}
            >
              Informacion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;

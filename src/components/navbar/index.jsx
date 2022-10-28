import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/react.svg'

export const NavBar = () => {
  return (
    <header className="flex items-center pb-2 md:pb-4 rounded  bg-white shadow-md shadow-black/30 mb-2 ">
      <div className="flex">
        <Link to="/" style={{ padding: 5 }}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="nav ml-auto">
        <ul className="flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:pt-0 md:mr-4 lg:mr-8">
          <li className="block font-medium px-4 py-1 md:p-2 lg:px-4">
            <Link to="/" style={{ padding: 5 }}>
              Inicio
            </Link>
          </li>
          <li className="block font-medium px-4 py-1 md:p-2 lg:px-4">
            <Link to="/contact" style={{ padding: 5 }}>
              Contacto
            </Link>
          </li>
          <li className="block font-medium px-4 py-1 md:p-2 lg:px-4">
            <Link to="/about" style={{ padding: 5 }}>
              Informacion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default NavBar

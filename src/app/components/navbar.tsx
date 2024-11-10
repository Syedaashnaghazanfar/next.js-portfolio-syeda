// components/Navbar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-gray-800 text-white p-7">
      <h1 className="text-xl hover:text-gray-500 transition duration-300 p-4 mr-auto ml-[60px] font-bold">
        Ashna Ghazanfar
      </h1>
      <ul className="flex space-x-12 mr-[100px]">
        <li className="relative group">
          <Link href="/" className="text-xl">Home</Link>
          <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white-1000 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <FontAwesomeIcon icon={faHome} className="text-white" />
          </div>
        </li>
        <li className="relative group">
          <Link href="/about" className="text-xl">About</Link>
          <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white-1000  flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <FontAwesomeIcon icon={faUser} className="text-white" />
          </div>
        </li>
        <li className="relative group">
          <Link href="/projects" className="text-xl">Projects</Link>
          <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white-1000  flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <FontAwesomeIcon icon={faProjectDiagram} className="text-white" />
          </div>
        </li>
        <li className="relative group">
          <Link href="/contact" className="text-xl">Contact</Link>
          <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white-1000  flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
          </div>
        </li>
      </ul>
      <div className='bg-white w-[1756px] h-1 absolute mt-[110px]'></div>
    </nav>
    
  );
};

export default Navbar;

'use client'
import React, { useState } from 'react';
import NavItem from './NavItem';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#E9E3D7] border-b border-solid border-slate-600 font-josefin w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="text-gray-800 text-l">
          <a href="/">
            <img src="/tulisan-itp.svg" alt="ITP Logo" className="w-40" />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`absolute top-16 left-0 w-full bg-[#E9E3D7] md:static md:flex md:flex-row md:items-center md:justify-end px-2 md:px-0 py-1 md:py-0 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 text-sm ${
            isMenuOpen ? 'flex flex-col items-center' : 'hidden'
          } md:flex`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/tickettypes">Ticket</NavItem>
          <NavItem href="/merchandise">Merchandise</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
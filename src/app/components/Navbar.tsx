import React from 'react';
import NavItem from './NavItem';


export const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#E9E3D7] border-b border-solid border-slate-600 font-josefin w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="text-gray-800 text-l">
          <img src="/tulisan-itp.svg" alt="" className='w-40'/>
        </div>
        <ul className="flex flex-col md:flex-row md:items-center px-2 md:px-0 py-1 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 text-sm">
        <NavItem href="/">Home</NavItem>
          <NavItem href="/tickettypes">Ticket</NavItem>
          <NavItem href="/merchandise">Merchandise</NavItem>
        </ul>
      </div>
    </nav>
  );
}

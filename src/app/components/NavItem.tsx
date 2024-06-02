'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <li>
      <a 
        href={href} 
        onClick={handleClick} // Call handleClick function on click
        className="px-2 md:px-3 py-1 md:py-2 rounded hover:text-black"
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;

import React from 'react'
import Image from 'next/image';

interface TicketBackgroundProps {
  currentPage: number;
}

const TicketBackground: React.FC<TicketBackgroundProps> = ({ currentPage }) => {
  const getMobileSrc = () => {
    if (currentPage === 3 || currentPage === 5 || currentPage === 6) {
      return "/ticket/mobile/bg-ticket-3.svg";
    }
    return "/ticket/mobile/bg-ticket-2.svg";
  };

  return (
    <div className='absolute w-full h-full'>
      <Image 
        src="/ticket/bg-ticket-2.svg"
        fill
        alt="Ticket Background"
        sizes='none'
        className='object-cover sm:visible invisible'
      />

      <Image
        src={getMobileSrc()}
        fill
        alt="Ticket Background"
        sizes='none'
        className='object-cover visible sm:invisible'
      />
    </div>
  );
}

export default TicketBackground;

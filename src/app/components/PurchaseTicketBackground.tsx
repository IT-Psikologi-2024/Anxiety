import React from 'react'
import Image from 'next/image';

const TicketBackground = () => {
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
        src="/ticket/mobile/bg-ticket-2.svg"
        fill
        alt="Ticket Background"
        sizes='none'
        className='object-cover visible sm:invisible'
      />
    </div>
  )
}

export default TicketBackground

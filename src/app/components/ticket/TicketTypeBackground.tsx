import React from 'react'
import Image from 'next/image';

const TicketTypeBackground = () => {
  return (
    <div className='absolute w-full h-full'>
      <Image 
        src="ticket/bg-ticket-1.svg"
        fill
        alt="Ticket Background"
        sizes='none'
        className='object-cover sm:visible invisible'
      />

      <Image 
        src="/ticket/mobile/bg-ticket-1.svg"
        fill
        alt="Ticket Background"
        sizes='none'
        className='object-cover visible sm:invisible'
      />
    </div>
  )
}

export default TicketTypeBackground

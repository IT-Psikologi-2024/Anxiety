import React from 'react'
import Image from 'next/image';

const TicketTypeBackground = () => {
  return (
    <div className='absolute w-full h-full'>
          <Image 
            src="/bg-ticket-1.svg"
            fill
            alt="home background"
            sizes='none'
            className='object-cover'
          />
    </div>
  )
}

export default TicketTypeBackground
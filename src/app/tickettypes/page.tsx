import React from 'react'
import { Navbar } from '../components/Navbar'
import Image from 'next/image'


const TicketTypesPage = () => {
  return (
    <div className='absolute w-full h-[1117px]'>
      <Navbar />
      <Image 
            src="/bg-ticket-1.svg"
            fill
            alt="Ticket Background"
            sizes='none'
            className='object-cover'
          />
    </div>
  )
}

export default TicketTypesPage
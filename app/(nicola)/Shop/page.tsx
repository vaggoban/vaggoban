import React from 'react'
import Image from 'next/image'
import kalada from "../img/B1.jpg"


export default function page() {
  return (
    <div>
      <div className="the_shop sm:flex sm:items-center">
        <div className="left w-80 h-96">
          <Image alt='whatever' src={kalada} className='h-full w-full'></Image>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  )
}

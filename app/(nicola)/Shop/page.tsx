import React from 'react'
import Image from 'next/image'
import black from "../img/B1.jpg"


const page = () => {
  return (
        <div className="shop">
          <div className="one">
           <Image alt='smoke up yo' src={black} className='h-96 w-80'></Image>
          </div>
          <div className="two">
            whatever
          </div>
        </div>
  )
}

export default page
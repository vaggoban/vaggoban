import React from 'react'
import Image from 'next/image'
import smoke from "../img/l (1).jpg"


const page = () => {
  return (
    <div>
        <div className="home_section bg-gray-200">
          <div className="text text-4xl uppercase tracking-wider sm:w-3/4  mx-auto color pl-8 py-2 text-center sm:text-start">smoke up</div>
          <figure className='sm:w-3/4 px-8 mx-auto'>
            <Image alt='smoke' src={smoke} className='w-full rounded' ></Image>
          </figure>
          <div className="text capitalize text-2xl mx-auto px-8 text-center sm:w-3/4 mt-5">
            lucky strike : The Best Choice for Cheap and Convenient Shopping
          </div>
          <div className="text text-center px-8 py-8">
          We recognize that smoking can be a costly habit, and we want to help our clients save money without losing the quality of their smoking experience at LuckyStrikCigs.com. Continue reading to learn about the advantages of purchasing Lucky Strike cigarettes from our website. We can make the delivery procedure simple and convenient for our consumers.
          </div>
          <div className="text-2xl text-center">
          Lucky Strike Cigarettes Are a Perfect Choice for Smokers.
          </div>
        </div>
    </div>
  )
}

export default page
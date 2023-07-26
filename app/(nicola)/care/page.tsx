import React from 'react'
import Image from 'next/image'
import care from "../img/i4.jpg"
import Link from 'next/link'
export default function page() {
  return (
    <div>
        <div className="care p-8 sm:p-16 ">
          <figure className='sm:w-1/2 mx-auto'>
            <Image alt="care for you" src={care} className='w-full h-full  rounded-lg'>
            </Image>
          </figure>
          <div className="line1 text-4xl capitalize font-bold tracking-wider sm:w-1/2 mx-auto">
            we care about you __
          </div>
          <div className="line2 text-md capitalize font-bold tracking-wider sm:w-1/2 mx-auto ">
           we provide the best service to our clints. our all doctors are highly educated from japan and south korea. we belive if our client gets one more days in life its our pleasure.
          </div>
          <div className="sm:w-1/2 mx-auto">
          <Link href="./support"><div className="l2 text-lg border border-cyan-600 py-1 px-1 text-center bg-slate-200 font-medium bg-transparent w-32 mt-2  border-2  rounded">explore more</div></Link>
          </div>
        </div>
    </div>
  )
}

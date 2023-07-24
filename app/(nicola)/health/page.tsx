import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
       <div className="health py-2 px-3">
        <div className="text capitalize text-4xl font-bold  sm:text-center
        sm:w-1/2 sm:mx-auto sm:py-32 py-24">
          <h1 className='text-lg uppercase pb-3'>welcome to heisenberg</h1>
          <p>isn't it time to care about</p>
          <p className='pb-3'>your own helth?</p>
          <p className='text-sm'>do not forget your future your lifetime depends on your health condition. if you want to live a long life then lets focus now.</p>
          <div className="button grid grid-cols-2  sm:justify-items-center">
          <Link href="./care"><p className='text-lg border border-cyan-600 py-1 px-1 text-center bg-slate-200 font-medium bg-transparent w-32 mt-2  border-2  rounded '>Learn More</p></Link>
          <Link href="./care"><p className='text-lg border border-cyan-600 py-1 px-1 text-center bg-slate-200 font-medium w-32 mt-2 border-2  rounded  bg-transparent'>why us</p></Link>
          </div>
        </div>
       </div>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
// import sopnil from "../img/sopnil.jpg"
import salim from "../img/bocktiar.jpg"
export default function page() {
  return (
    <div>
        <div className="support grid sm:grid-cols-2 justify-center mx-auto py-4
        sm:w-3/4  sm:gap-4 capitalize">

        <div className="sector1 border-2 text-center">
            <figure className='w-64 border-4 mx-auto mt-5'>
              <Image alt='ok' src={salim} className='w-full h-full'></Image>
            </figure>


           <div className="line1 font-bold tracking-wider text-2xl py-3">salim bocktiar
            </div>
            <div className="fuck line2 font-bold  text-sm">
              fuck you
            </div>


        </div>
{/* 
          <div className="sector2 border-2 text-center">
            <figure className='w-64 border-4 mx-auto mt-5'>
              <Image alt='ok' src={sopnil} className='w-full h-full'></Image>
            </figure>
            <div className="line1 text-2xl py-3 font-bold tracking-wider">sopnil tasnim</div>
            <div className="line2 text-sm font-bold">
              it's sopnil the president of tasnim government. my wife and kid would have been dead without the HEISENBERG. all credit goes to the heisenberg and their docktors. they doesn's do business with paitent
            </div>
          </div> */}

        </div>
    </div>
  )
}

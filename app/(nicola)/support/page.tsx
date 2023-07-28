import React from 'react'
import Image from 'next/image'
import sopnil from "../img/sopnil.jpg"
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
            <div className="line2 font-bold  text-sm">
             my name is salim bockiar . i could have been dead five years now. credit goes to HEISENBERG company.
            </div>
        </div>

          <div className="sector2 border-2 text-center">
            <figure className='w-64 border-4 mx-auto mt-5'>
              <Image alt='ok' src={sopnil} className='w-full h-full'></Image>
            </figure>
            <div className="line1 text-2xl py-3 font-bold tracking-wider">sopnil tasnim</div>
            <div className="line2 text-sm font-bold">
              i am  sopnil im the manager of tasnim. 
            </div>
          </div> 

        </div>
    </div>
  )
}

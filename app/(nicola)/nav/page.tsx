import React from 'react'
import Image from 'next/image'
import navImg from "../img/i5.png"
import list from "../img/i3.png"
import Link from 'next/link'
export default function page() {
  return (
    <div>
       <div className="navigation flex justify-between items-center
      overflow-x-hidden overflow-y-hidden bg-slate-200 py-1">
        <div className="logo  text-4xl font-bold tracking-wider capitalize pl-2
        flex sm:ml-12">
          <p className='text-cyan-400'>heisenberg</p>
          <figure className='pt-2 my-auto '>
            <Image alt='img' src={navImg} ></Image>
          </figure>
        </div>
        <label>
          <div className="threedot rounded p-1 w-11 bg-cyan-400 mt-1 mr-2 sm:hidden">
          <figure className='h-8 w-8   '>
            <Image alt='im' src={list} className='h-full w-full '></Image>
          </figure>
          </div>
          <input type="checkbox" className='hidden '/>
          {/* links */}
          <div className="links flex gap-4 hidden  absolute border
          inset-0 top-14 w-2/3 right-2 z-50 bg-slate-200
          h-64  
          sm:flex sm:static sm:h-12 sm:float-right sm:text-center sm:border-none">
           <Link href="./health" className='my-auto'>
            <p className='text-xl font-bold tracking-wider border border-cyan-600 py-1 text-cyan-500 hover:text-cyan-700 px-3 text-center '>Health</p>
           </Link>
           <Link href="./care" className='my-auto'>
            <p className='text-xl font-bold tracking-wider border py-1 text-cyan-500 hover:text-cyan-700 px-3 text-center border border-cyan-600 '>Care</p>
           </Link>
           <Link href="./support" className='my-auto'>
            <p className='text-xl font-bold tracking-wider border py-1 text-cyan-500 hover:text-cyan-700 px-3 text-center border border-cyan-600 '>Support</p>
           </Link>
           {/* author  */}

           <div className="author pt-20 sm:invisible ">
            <div className='capitalize'>this web page is coded by...
             <div className="text-cyan-400 uppercase font-bold">
              <p>nicola goodman</p>
              </div> 
              </div>
           </div>
           
          </div>
        </label>
       </div>
    </div>
  )
}

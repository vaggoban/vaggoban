import React from 'react'
import Image from 'next/image'
import venom from "../img/dickhead.jpg"
import Link from 'next/link'
export default function page() {
  return (
    <div className='hidden sm:flex'>
       <div className="nav_phone flex flex-row justify-between items-center px-5
       bg-slate-400 py-1 w-full">

        <div className="logo flex gap-2">
          <div className="doubletask relative ">
          <div className="name uppercase text-4xl tracking-wider font-bold  bg-slate-600 text-teal-300 rounded">venom</div>
          <div className="name uppercase text-4xl tracking-wider font-bold  bg-sky-700 text-teal-300 absolute top-0 left-0 part2 rounded">venom</div>
          </div> 
          <figure className='h-10 w-12'>
           <Image alt='venom image' src={venom} className='w-full h-full rounded'></Image>
          </figure>
        </div>
         
         <div className="mybtn uppercase flex flex-row gap-4">
         <Link href="./impact" className='mx-auto'>
          <div className="border-2 border-teal-400 py-1 px-3 rounded  ">
          impact
          </div>
          </Link>
          <Link href="./impact" className='mx-auto'>
          <div className="border-2 border-teal-400 py-1 px-3 rounded  ">
          first aid
          </div>
          </Link>
          <Link href="./impact" className='mx-auto'>
          <div className="border-2 border-teal-400 py-1 px-3 rounded  ">
          support
          </div>
          </Link>
         </div>

       </div>
    </div>
  )
}

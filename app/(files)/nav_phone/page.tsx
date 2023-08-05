import React from 'react'
import Image from 'next/image'
import venom from "../img/dickhead.jpg"
import list from "../img/list-text.png"
import Link from 'next/link'
export default function page() {
  return (
    <div className='sm:hidden'>
       <div className="nav_phone flex justify-between items-center px-5">
        <div className="logo flex border-2 rounded-lg">
          <div className="doubletask relative">
          <div className="name uppercase text-4xl tracking-wider font-bold  bg-slate-600 text-teal-300">venom</div>
          <div className="name uppercase text-4xl tracking-wider font-bold  bg-sky-700 text-teal-300 absolute top-0 left-0 part2">venom</div>
          </div> 
          <figure className='h-10 w-12'>
           <Image alt='venom image' src={venom} className='w-full h-full'></Image>
          </figure>
        </div>
         
         <label >
         <div className="list h-10 w-10 border bg-teal-300  rounded p-1">
          <Image alt='img' src={list} className='h-full w-full '></Image>
        </div>
        <input type="checkbox" className='hidden' />
        <div className="links hidden  w-64  ">
          <div className="buttons border-2 h-80 mt-32 pt-24 px-20 mx-auto flex flex-col gap-4 uppercase text-white font-bold tracking-wider">
          <Link href="./impact" className='mx-auto'>
          <div className="border-2 border-teal-400 py-1 px-3 rounded  ">
          impact
          </div>
          </Link>
          <Link href="./impact" className='mx-auto'>
          <div className="border-2 border-teal-400 py-1 px-3 rounded  ">
          impact
          </div>
          </Link>
          <Link href="./impact" className='mx-auto'>
          <div className="border-2 border-teal-400 py-1 px-3 rounded  ">
          impact
          </div>
          </Link>
          </div>
        </div>
         </label>
       </div>
    </div>
  )
}

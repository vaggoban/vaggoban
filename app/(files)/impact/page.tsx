import React from 'react'
import Image from 'next/image'
import viper from "../img/yo (4).jpg"

export default function page() {
  return (
    <div>
      <div className="impact sm:flex">
        <div className="one  sm:w-2/5 bg-slate-400"> <div className="the-color w-48 h-full bg-teal-400 mx-auto"></div>
         <div className="thesnake">
         <div className="layer1 p-2 bg-slate-500 rounded-full">
            <div className="layer2 p-2 bg-teal-400 rounded-full">
            <div className="img h-64 w-64 rounded-full">
               <Image src={viper} alt='viper' className='h-full w-full rounded-full'></Image>
            </div>
            </div>
           </div>
           <div className="text px-2 text-slate-600 uppercase text-center font-bold text-2xl tracking-wider">the red viper</div>
         </div>
        </div>
        <div className="two border sm:w-3/5">2</div>
      </div>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blue from "../img/yo (5).jpg"
export default function page() { 
  return (
    <div>
        <div className="top sm:px-48 py-12 bg-stone-300 ">
            <div className="header capitalize font-bold tracking-wider text-4xl
            text-center sm:text-start ">appointments at venom clinic</div>
            <div className="text capitalize text-center sm:text-start py-2">venom clinic offers appointments at london, united kingdom and kualalampur, malaysia and the venom clinic health locations  </div>
          <Link href="https://www.mayoclinic.org/appointments">  <div className="bg-slate-600 px-2 py-2 w-48 text-center text-white rounded font-bold capitalize mx-auto sm:mx-0">request appoinments</div></Link>
        </div>

        <div className="bottom bg-slate-400 sm:flex flex-row">
          <div className="left sm:w-1/3 sm:bg-stone-300">
            <div className="text text-center sm:text-start pt-8">
             <div className="dec">CONTACT US NOW</div>
             <div className="nmbr">+80099990000</div>
            </div>
          </div>
          <div className="right sm:w-2/3">
            <div className="text uppercase text-4xl font-bold text-center pt-5">blue viper Snake Rescue</div>
            <div className="deccription text-center py-12 sm:px-24 px-8">
            Welcome to Canberra’s premier reptile catching service. We specialise in removing unwanted venomous snakes and other reptiles from your home, office or worksite, servicing Canberra and the Australian Capital Territory under licence for catch and release by the ACT Government. We have been granted the first ever licence in the ACT for catch and release of reptiles, commencing in December 2015. 
            </div>
            <div className="img sm:w-4/6 mx-auto pb-5 ">
              <Image alt="img" src={blue} className='h-full w-full rounded-lg px-5'></Image>
            </div>
          </div>
        </div>
    </div>
  )
}

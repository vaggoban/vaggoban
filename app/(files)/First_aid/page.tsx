import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
        <div className="top sm:px-48 py-12">
            <div className="header capitalize font-bold tracking-wider text-4xl
            text-center sm:text-start ">appointments at venom clinic</div>
            <div className="text capitalize text-center sm:text-start py-2">venom clinic offers appointments at london, united kingdom and kualalampur, malaysia and the venom clinic health locations  </div>
          <Link href="https://www.mayoclinic.org/appointments">  <div className="bg-slate-600 px-2 py-2 w-48 text-center text-white rounded font-bold capitalize mx-auto sm:mx-0">request appoinments</div></Link>
        </div>
    </div>
  )
}

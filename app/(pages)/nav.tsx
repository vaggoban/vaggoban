import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import no_smoking from "./img/no-smoking.png"

const nav = () => {
  return (
    <div>
        <div className="nav border border-gray-200 p-2 mt-1 mx-1 flex flex-row  justify-center flex-wrap sm:gap-4 hidden sm:flex">
            <div className="links flex justify-center  flex-wrap gap-2 ">
                <Link href="./shop"><div className="border capitalize px-8 py-2 hover:text-sky-400 rounded">shop</div></Link>
                <Link href="./shop"><div className="border capitalize px-3 py-2 hover:text-sky-400 rounded">order track</div></Link>
                <Link href="./shop"><div className="border capitalize px-3 py-2 hover:text-sky-400 rounded">my account</div></Link>
            </div>
            <div className="img">
                <figure className='w-10 '>
                  <Image alt='no smoking please' src={no_smoking} ></Image>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default nav
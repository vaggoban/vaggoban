import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import no_smoking from "./img/no-smoking.png"
import list from "./img/list-text.png"

export default function nav() {
  return (
    <div className='bg-gray-200'>
      <div className="navbar flex justify-between px-5">
        <label >
        <input type="checkbox" name="" id="" className='hidden'/>
          <div className="figure w-11 sm:hidden">
            <Image alt='list' src={list}></Image>
          </div>
          
        <div className="the_buttons hidden text-center  mx-auto flex gap-4
        sm:flex sm:flex-row bg-gray-200">
          <Link href="./Home">
            <div className="home capitalize bg-sky-400 w-20 py-2 rounded mx-auto">home</div>
          </Link>
          <Link href="./Shop">
            <div className="home capitalize bg-sky-400 w-20 py-2 rounded mx-auto">shop</div>
          </Link>
          <Link href="./Order_Track">
            <div className="home capitalize bg-sky-400 w-28 py-2 rounded mx-auto">
              order track
            </div>
          </Link>
          <Link href="./My_account ">
            <div className="home capitalize bg-sky-400 w-28 py-2 rounded mx-auto">
              my account
            </div>
          </Link>
          <Link href="./Shipping">
            <div className="home capitalize bg-sky-400 w-20 py-2 rounded mx-auto">shipping</div>
          </Link>
        </div>

        </label>
        <div className="the_image pb-3">
          <figure className='w-11'>
            <Image src={no_smoking} alt='no smoking' ></Image>
          </figure>
        </div>
      </div>
    </div>
  )
}


// https://globaltobaccocontrol.org/tpackss/pack-search/pack/10952/lucky-strike-bangladesh-w2-02https://globaltobaccocontrol.org/tpackss/pack-search/pack/10952/lucky-strike-bangladesh-w2-02
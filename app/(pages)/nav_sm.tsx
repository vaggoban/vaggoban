import React from 'react'
import Image from 'next/image'
import smoking from "./img/no-smoking.png"
import list from "./img/list-text.png"
import Link from 'next/link'


const nav_sm = () => {
  return (
    <div>
      <div className="navsm sm:hidden px-3 py-2 flex flex-row justify-between">
        <div className="no_smoking w-10">
          <Image alt='no smoking ' src={smoking}></Image>
        </div>

      <div className="right">
        <label >
          <Image alt='ok' src={list} className='w-10'></Image>
          <input type="checkbox" className='hidden' />
    

          <div className="links hidden w-5/6 uppercase text-center py-12  ">
            <Link href="./shop"><div className="shop px-3 py-2  w-28
            mx-auto bg-sky-400 tracking-wider rounded">shop</div></Link>
            <Link href="./order_track"><div className="shop px-3 py-2  w-28 mx-auto my-12 bg-sky-400 tracking-wider rounded ">order track</div></Link>
            <Link href="./my_account"><div className="shop px-3 py-2  w-28 mx-auto  bg-sky-400 tracking-wider rounded " >my account</div></Link>
          </div>
          
        </label>
      </div>
      </div>
    </div>
  )
}

export default nav_sm
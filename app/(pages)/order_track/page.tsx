import React from 'react'
import Image from 'next/image'
import one from "../img/l2.jpg"
import two from "../img/b4.jpg"
import three from "../img/B1.jpg"


const page = () => {
  return (
    <div>
      <div className="order bg-gray-200">
        <div className="text-2xl sm:text-4xl text-center w-3/4 mx-auto font-bold tracking-wider pt-5">ON SALE PRODUCTS</div>

        <div className="box flex justify-center flex-col sm:flex-row ">

          <div className="one w-full sm:w-fit mx-auto">
            <figure className='h-96 w-64 py-5 mx-auto'>
              <Image alt='smoke' className='h-full w-full rounded' src={one}></Image>
            </figure>
            <div className="text-center mb-2 text-xl">Lucky Strike Amber Box</div>
            <div className="text-center">
            <button className='uppercase border border-sky-600 px-3 py-1.5 rounded tracking-wider text-center m-2'>sale</button>
            </div>
            <div className="price text-center">
             <div className="old_new_price flex justify-center gap-3">
             <div className="dollar">
                <span className=''>$56.99</span>
                <div className="line"></div>
              </div>
              <div className="new_dollar">$43.99</div>
             </div>
            </div>
            <div className="btn border border-sky-600 capitalize px-3 py-2 rounded w-fit mx-auto my-2">add to cart</div>
          </div>

  <div className="two w-full sm:w-fit mx-auto">
  <figure className='h-96 w-64 py-5 mx-auto'>
    <Image alt='smoke2' className='h-full w-full rounded' src={two}></Image>
  </figure>
  <div className="text-center mb-2 text-xl">Lucky Strike Original Red Box</div>
  <div className="text-center">
  <button className='uppercase border border-sky-600 px-3 py-1.5 rounded tracking-wider text-center m-2'>sale</button>
  </div>
  <div className="price text-center">
   <div className="old_new_price flex justify-center gap-3">
   <div className="dollar">
      <span className=''>$56.99</span>
      <div className="line"></div>
    </div>
    <div className="new_dollar">$43.99</div>
   </div>
  </div>
  <div className="btn border border-sky-600 capitalize px-3 py-2 rounded w-fit mx-auto my-2">add to cart</div>
</div>


       
<div className="three  w-full sm:w-fit mx-auto">
  <figure className='h-96 w-64 py-5 mx-auto'>
    <Image alt='smoke' className='h-full w-full rounded' src={three}></Image>
  </figure>
  <div className="text-center mb-2 text-xl">Lucky Strike wild Box</div>
  <div className="text-center">
  <button className='uppercase border border-sky-600 px-3 py-1.5 rounded tracking-wider text-center m-2'>sale</button>
  </div>
  <div className="price text-center">
   <div className="old_new_price flex justify-center gap-3">
   <div className="dollar">
      <span className=''>$56.99</span>
      <div className="line"></div>
    </div>
    <div className="new_dollar">$43.99</div>
   </div>
  </div>
  <div className="btn border border-sky-600 capitalize px-3 py-2 rounded w-fit mx-auto my-2">add to cart</div>
</div>
         
        </div>
      </div>
    </div>
  )
}

export default page
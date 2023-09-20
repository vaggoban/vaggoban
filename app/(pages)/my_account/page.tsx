import React from 'react'

const page = () => {
  return (
    <div>
      <div className="myaccount p-4  ">
        <div className="text-center text-4xl font-bold">Satisfaction Guaranteed</div>
        <div className="text-center text-lg font-bold tracking-wider pt-5 sm:pt-2">
        We cherish our clients at LuckyStrikCigs.com, and their pleasure is our main concern. Our goal is for our clients to be entirely delighted with their purchase. If you are not totally pleased with your purchase for any reason, we will do everything we can to make it right.
        </div>
        <div className="text-center pt-5">
        We guarantee our customers an outstanding experience from the moment they start browsing our selection to the moment they receive their purchase. With authentic products and reasonable prices, we believe we can provide the best service possible. Our satisfied customers are a testament to our commitment to excellence. Don’t take our word for it – try us out and see for yourself why so many smokers trust us for their tobacco needs. When you order from us, you can rest assured that you will receive a high-quality product delivered straight to your door, with free worldwide shipping options available
        </div>
      </div>
      <div className="login text-center mx-auto sm:p-20 mx-auto my-12 py-12 sm:text-start bg-gray-200 ">
      <div className=" bottomSide w-5/6 sm:w-3/5 mx-auto text-start sm:w-full flex flex-col gap-4 justify-center">
      <div className="extra-padding w-fit mx-auto">
      <div className="text-4xl font-bold tracking-wider">Login</div>
        <div className="text-start">Username or email address *</div>
        <input type="text" className='border border-double border-2 w-full sm:w-96' />
        <div className="text">Password *</div>
        <input type="text"  className='border border-double border-2 w-full sm:w-96 '   />
        <div className="btn capitalize font-bond text-lg border border-sky-400 rounded w-fit px-4 py-1.5 mt-4">log in</div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default page
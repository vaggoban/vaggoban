import React from 'react'


const page = () => {
  return (
    <div>
      <div className="shop sm:grid sm:grid-cols-2 items-center bg-gray-200">
        <div className="left border py-12">
          <div className="img_cigarette h-96 w-80 mx-auto">
            <div className="h-full w-full thepic"></div>
          </div>
        </div>
        <div className="right">
          <div className="text-4xl text-center px-3 py-2 sm:text-start">
          Fast and Convenient International Shipping for Your Smoking Needs
          </div>
          <div className="text-center px-4 sm:text-start">
          For us, the necessity of speedy and simple shipment comes first. That is why we provide a range of delivery alternatives to ensure that your cigarettes arrive quickly. We have you covered whether you want standard or expedited shipment. Our shipping fees are among the most reasonable on the internet, making it simple for you to obtain your favorite smokes without spending a bunch. We will gladly mail the items to our consumers regardless of where they are, hence we provide international delivery. We mail our smokes to over 200 countries worldwide, so you may enjoy your favorite Lucky Strikes no matter where you are.
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
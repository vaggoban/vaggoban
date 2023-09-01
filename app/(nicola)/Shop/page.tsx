import React from 'react'
import Image from 'next/image'
import black from "../img/B1.jpg"


const page = () => {
  return (
        <div className="shop">
          <div className="left">
           <Image alt='smoke up yo' src={black} className='h-96 w-80'></Image>
          </div>
          <div className="right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio aspernatur quod in dignissimos totam, possimus consequatur quae voluptates earum, recusandae minima. Neque consequuntur facere adipisci mollitia necessitatibus eum nemo repellendus corporis reprehenderit?
          </div>
        </div>
  )
}

export default page
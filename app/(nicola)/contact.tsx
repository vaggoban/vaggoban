import React from 'react'

export default function contact() {
  return (
     <div className=''>
      
<form
  action="https://formspree.io/f/mzbldbwv"
  method="POST"
  className='flex flex-col border-4 items-center my-16 sm:w-1/2 mx-auto pb-5'
>
  <label className=' py-5 flex flex-col'>
    Your email:
    <input type="email" name="email" className='border w-64 h-14'/>
  </label>
  <label className='flex flex-col'>
    Your message:
    <textarea name="message" className='border w-64'></textarea>
  </label>
 
<div className="btn  w-64 text-start">
<button type="submit" className='border mt-4 px-4 mb-5 py-2 '>Send</button>
</div>
</form>
    </div>
  )
}

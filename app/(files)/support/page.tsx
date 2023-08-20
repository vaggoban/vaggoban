import React from 'react'

export default function page() {
  return (
    <div className='bg-slate-300'>
     <div className="support py-12 ">
      <div className="head uppercase text-4xl text-center font-bold tracking-wider">the antivenom support section</div>
      <div className="text text-center capitalize mt-2">we provide the best antivenom service in the whole country</div>
      <div className="text text-center capitalize px-3 py-2 rounded bg-teal-400 w-80 mt-3 mx-auto"><a href="https://my.clevelandclinic.org/health/diseases">click here fof a premium service</a></div>
     </div>

     
<form
  action="https://formspree.io/f/mzbldbwv"
  method="POST" className='pb-5 flex flex-col gap-4 '
>
  <label className=' flex flex-col gap-2 w-64 mx-auto'>
    Your email:
    <input type="email" name="email" className='w-64 h-8 rounded' />
  </label>

  <label className=' flex flex-col gap-2 w-64 mx-auto'>
    Your message:
    <textarea name="message" className='w-64 h-48 rounded'></textarea>
  </label>
 
  <button type="submit" className=' w-20 mx-auto py-2 rounded bg-teal-400 tracking-wider uppercase'>Send</button>
</form>

    </div>
  )
}

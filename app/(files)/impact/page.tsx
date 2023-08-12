import React from 'react'
import Image from 'next/image'
import viper from "../img/yo (4).jpg"
import av from "../img/av.jpg"
export default function page() {
  return (
    <div>
      <div className="impact sm:flex">
        <div className="one  sm:w-2/5 bg-slate-400">
           <div className="the-color w-48 h-full bg-teal-400 mx-auto"></div>
         <div className="thesnake ">
         <div className="layer1 bg-slate-400 rounded-full mx-auto sm:p-2 ">
            <div className="layer2 bg-teal-400 rounded-full sm:p-2 ">
            <div className="img h-64 w-64 rounded-full">
               <Image src={viper} alt='viper' className='h-full w-full rounded-full'></Image>
            </div>
            </div>
           </div>
           <div className="text px-2 text-teal-400 pb-5  sm:text-slate-600 uppercase text-center font-bold text-2xl tracking-wider pt-5">the red viper</div>
         </div>
        </div>
        <div className="two bg-slate-400 sm:w-3/5">
           khali 
        <div className="text  w-80 mx-auto">
        Presentation:
        </div>
        <div className="description w-80 mx-auto">
        Antivenom : Each vial contains lyophilized preparation of Snake Venom Antiserum BP. After reconstitution each ml Snake Venom Antiserum neutralizes not less than Cobra venom (Naja naja) 0.60 mg, Common Krait venom (Bungarus caeruleus) 0.45 mg, Russell's Viper venom (Vipera russelli) 0.60 mg, Saw-scaled Viper venom (Echis carinatus) 0.45 mg.
        </div>
        </div>  
      </div>
    </div>
  )
}

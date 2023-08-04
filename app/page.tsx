import React, { Suspense } from 'react'
import Nav from "./(files)/nav/page"
import Nav_phone from "./(files)/nav_phone/page"
import Loading from './loading'
export default function page() {
  return (
    <div>
     <Suspense fallback={ <Loading/> } >
         <Nav_phone/>
     </Suspense>
     <Nav/>
    </div>
  )
}

import React, { Suspense } from 'react'
import Nav from "./(files)/nav/page"
import Nav_phone from "./(files)/nav_phone/page"
import Impact from "./(files)/impact/page"
import First_aid from "./(files)/First_aid/page"
import Support from "./(files)/support/page"
export default function page() {
  return (
    <div>
     <Nav_phone/>
     <Nav/>
     <Impact/>
     <First_aid/>
     <Support/>
    </div>
  )
}

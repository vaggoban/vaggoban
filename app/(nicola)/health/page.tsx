import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
   <div className="health">
    <div className="text">
      <div className="wlc">welcome to heisenberg</div>
      <div className="p1">isnt it time to care about</div>
      <div className="p2">your own health</div>
      <div className="p3">do not forget your future your lifetime depends on your health condition. if you want to live a long life then lets focus now</div>
    </div>
    <div className="links">
      <Link href="./care">why us</Link>
      <Link href="./support">learn more</Link>
    </div>
   </div>
  )
}

import React from 'react'
import Logo from './(pages)/logo'
import Nav from "./(pages)/nav"
import Navsm from "./(pages)/nav_sm"
import Shop from "./(pages)/shop/page"



export default function page() {
  return (
    <div>
       <Logo/>
       <Nav/>
       <Navsm/>
       <Shop/>
    </div>
  )
}

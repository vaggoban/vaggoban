import React from 'react'
import Logo from './(pages)/logo'
import Nav from "./(pages)/nav"
import Navsm from "./(pages)/nav_sm"
import Shop from "./(pages)/shop/page"
import Order from "./(pages)/order_track/page"
import My_account from "./(pages)/my_account/page"




export default function page() {
  return (
    <div>    

       <Logo/>
       <Nav/>
       <Navsm/>
       <Shop/>
       <Order/>
       <My_account/>
       
    </div>
  )
}

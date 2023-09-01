import React from 'react'
import Nav from "./(nicola)/nav"
import Thelogo from './(nicola)/thelogo'
import Home from "./(nicola)/Home/page"
import Order from "./(nicola)/Order_Track/page"

const page = () => {
  return (
    <div>
      <Thelogo/>
      <Nav/>
      <Home/>
      <Order/>
    </div>
  )
}

export default page
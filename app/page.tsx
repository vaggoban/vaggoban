import React from 'react'
import Nav from "./(nicola)/nav"
import Thelogo from './(nicola)/thelogo'
import Home from "./(nicola)/Home/page"
import Shop from "./(nicola)/Shop/page"


const page = () => {
  return (
    <div>
      <Thelogo/>
      <Nav/>
      <Home/>
      <Shop/>
    </div>
  )
}

export default page
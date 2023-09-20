'use client'
import React from 'react'
import { useState } from "react";


const todo = () => {
  const [name ,setName]=useState("anil sidhu")
  const apple=()=>{
        setName("the next js master")
  }
  const InnerComp=()=>{
    return(
      <h1>whatever</h1>
    )
  }
  return (
    <div>
      <h1>My favorite color is black {name}</h1>
      <button
        onClick={()=>apple()}
      >click me</button>
      <InnerComp/>
      {InnerComp()}
    </div>
  )
}

export default todo
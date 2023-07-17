import React from 'react'
import Nav from './(nicola)/nav/page'
import Health from "./(nicola)/health/page"
import Care from "./(nicola)/care/page"
import Support from "./(nicola)/support/page"

export default function page() {
  return (
    <div>
      <Nav/>
      <Health/>
      <Care/>
      <Support/>
    </div>
  )
}

import React from 'react'
import './prop.scss'
import Comp_card from './comp_card'
const Propert = () => {

  return (
    <>
      <div id='bg-developer_mode'   className="prop_wrapper_development ">
        <h1 >Our Services For Clients</h1>
        <p>Finally a complete {"{full-stack}"} solution for a Company in one place.</p>
        <Comp_card/>
      </div>
    </>
  )
}

export default Propert

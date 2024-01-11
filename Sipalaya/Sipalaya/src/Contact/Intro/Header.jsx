import React,{useState} from 'react'
import Form from './Form';
import Box from './Box'
import Map from './Map';


const Header = () => {
  const [size,setSize] =useState("1000")

  return (
    <>
          <div className="Contact_wrapper">
    <div className="contact_header_wrapper">
    <h1>Get in touch with us for more information</h1>
    <p>if you need help or have a question, we're here for you</p>
    </div>    
    <Map size={size}/>
    </div>   
    </>
  )
}

export default Header

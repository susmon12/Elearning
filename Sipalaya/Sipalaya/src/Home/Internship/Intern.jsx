import React from 'react'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom'
import './intern.scss'
const Intern = () => {
  return (
    <>
      <div className="Intern_wrapper">
        <div className="Intern_image_wrapper">
            <img src="./Students_2.jpg" alt="" />
        </div>
        <div className="intern_text_wrapper">
            <span><h2>Grab Siplaya Specific Course to boost your skills</h2></span>
            <h1>100% Internship / Job Placement</h1>
            <p>Sipalaya collaborates with top-tier companies, offering internships and full-time job opportunities exclusively to our graduates.</p>
            <Link to="admission">
               <Button text="Admission now →"/>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Intern

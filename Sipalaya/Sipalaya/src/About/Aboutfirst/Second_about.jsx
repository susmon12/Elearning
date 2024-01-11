import React from 'react'
import Lottie from "lottie-react";
import Animation from '../../assets/Animation3.json'

const Second_about = () => {
  return (
    <>
            <div className="first_wrap">
        <div className="About_desc">
        <div className="About_first_img">
            <Lottie animationData={Animation}/>
          </div>
          <div className="About_text">
            <div className="about_head">
              <h1>Why SiPalaya</h1>
            </div>
              <p>
              We know everyone learns differently, so we provide a flexible learning experience. You can learn when and where you want, at your own speed. Our courses are accessible on any device, making it simple to fit learning into your busy schedule. We offer various learning formats like videos, interactive exercises, and hands-on projects for a well-rounded experience. Join dynoAcademy now to manage your education and career growth.
              </p>
          </div>

        </div>
        </div>
    </>
  )
}

export default Second_about

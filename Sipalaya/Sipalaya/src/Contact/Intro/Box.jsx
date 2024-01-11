import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
const data =[
    {
        img:<FaMapMarkerAlt/>,
        title:"Headquater",
        desc:"Kathmandu,Balkumari-Bridge Koteshwor"
    },
    {
        img:<IoMdMail/>,
        title:"Email",
        desc:"sipalayainfotech01@gmail.com"
    },
    {
        img: <IoCall/>,
        title:"Phone",
        desc:"+977 9860552717 "
    }
]
const Box = () => {
  return (
    <>
    <div className="cont_box_wrapper">
        {data.map(({img,title,desc})=>(    
        <div className="Cont_card" key={Math.random()}>
            <div id={title}>
            {img}
            </div>
            <span>
                <h1>{title}</h1>
                <p>{desc}</p>
            </span>
        </div>
        ))}
    </div>
      
    </>
  )
}

export default Box

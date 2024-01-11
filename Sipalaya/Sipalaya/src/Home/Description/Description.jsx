import React from 'react'
import './Desc.scss'
import Button from '../../Components/Button'
import {Link} from "react-router-dom"
const data =[
    {
        img:"./hoc-lap-trinh.png",
        title:"Learn to Code",
        desc:"Start learning with a wide range of basic to advance courses created by top experts"
    },
    {
        img:"./thi-lap-trinh.png",
        title:"Practice coding",
        desc:"You don't just learn Physical and online, you get to build amazing things alongside your mentor."
    },
    {
        img:"./luyen-lap-trinh.png",
        title:"Earn Certificate",
        desc:"Showcase your talent with certificate, learn once set skill forever!"
    }
]
const Description = () => {
  return (
    <>
    <div className="Learn_wrapper">
        <div className="Learn_text">
        <h1>Programming <br/> is the in-demand skill for the future</h1>
        </div>

        <div className="Card_box_wrapper">
            {data.map(({img,title,desc})=>(

            <div className="card_box" key={Math.random()}>
                <span>
                <img src={img} alt="" />
                </span>
                <div className="box_text">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
            ))}

        </div>
        <p>Sipalaya also provide both online and Physical Class if you are intrested Admission now</p>
        <Link to="admission">
        <Button text="Admission now →"/>
        </Link>
        </div>      
    </>
  )
}

export default Description

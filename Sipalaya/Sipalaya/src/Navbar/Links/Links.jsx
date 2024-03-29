import React from 'react'
import {motion} from "framer-motion"
import './Links.scss'
import { Outlet,Link } from 'react-router-dom';


const variants ={
  open :{
    transition:{
      staggerChildren: 0.1,
    },
  },
  close:{
    transition:{
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants ={
  open:{
    y: 0,
    opacity: 1,
  },
  close:{
    y: 50,
    opacity:0,
  },

};

const data = [
  {
    items: "All Courses",
    links: "course",
  },
  {
    items: "About Us",
    links: "about",
  },
  {
    items: "Development",
    links: "development",
  },
  {
    items: "Contact",
    links: "contact",
  },
];

const Links = () => {
  return (
        <motion.div className='links' variants={variants}>
        {data.map(({items,links}) =>(
          <motion.span initial={{scale:0}} key={Math.random()} animate={{scale:1}} transition={{type:"spring", stiffness:100}}  variants={itemVariants}  whileHover={{scale:1.2}} whileTap={{scale:0.93}}>
            <Link to={`/${links}`}  className='ink'  >{items}</Link>
          </motion.span>
        ))}
       </motion.div>
  )
}

export default Links
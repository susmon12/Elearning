import React,{useRef} from 'react'
import './Future.scss'
import { animate, useScroll, useTransform, motion } from "framer-motion";
const Future = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({target: ref,offset: ["start start", "end start"],});
    const yBg = useTransform(scrollYProgress, [1, 0], [0, 1]);
    const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <>
      <motion.div className="future" ref={ref}>
        <motion.span  initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}>
                
        <h1> <span  className="textt" >
                Feel the vibe </span>like never before !</h1>
        <motion.p >
        
          The Future of Web Development is Here!
          </motion.p>
        <p className='p'>Discover our seamless workflow as we transform Figma designs into stunning
Wobflow website. Explore the synergy between design and dovelopment for
a pixel-perfect online experience.</p>
        </motion.span>
        <motion.div initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }} style={{y:ytext,transition: 'opacity .2s ease-in-out',}} className="future_img_wrapper">
            <motion.img src="./term.png" alt="future"/>
            <div className="light"></div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Future

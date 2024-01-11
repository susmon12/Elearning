import React,{useState, useEffect} from "react";
import "./Footer.scss";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

const items = ["About Us", "Terms & Conditions", "Privacy Policy", "Contact Us"];
const links = [ "Courses", "Support","Join Facebook Group"];
const data = [
  {
    items: "About Us",
    links: "about",
  },
  {
    items: "Terms & Conditions",
    links: "term&condition",
  },
  {
    items: "Privacy Policy",
    links: "policy",
  },
  {
    items: "Contact Us",
    links: "contact",
  },
];

const Footer = () => {


  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Set the current year in the state variable
    setCurrentYear(currentYear);
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount


  return (
    <>
      <section id="fot" className={`footer_section`}>
        <div className="footer_wrapper">
          <div className="footer_items">
            <div className="footer_desc">
              <motion.div
                className="logo"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, duration: 1 }}
              >
                <img src="logo.png" alt="" />
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.4,
                    duration: 1,
                  }}
                >
                  <img src="Logo_text.png" alt="" />
                </motion.span>
              </motion.div>
              <span className="desc">

              Sipalaya offers affordable online courses in Nepal, making education accessible to all. Our interactive lessons, created by industry experts and taught by qualified instructors, aim to provide you with the best learning experience.              </span>
            </div>
            <div className="footer_links">
              <div className="footer_link_header">
                <div className="link_link">
                  <h1>About Sipalaya</h1>
                  <span>
                    {data.map(({items,links},index) => (
                      <Link
                        to={links}
                        key={index}
                      >
                        {items}
                      </Link>
                    ))}
                  </span>
                </div>
                <div className="link_link">
                  <h1>Legals</h1>
                  <span>
                    {links.map((item) => (
                      <motion.a
                        href={`#${item}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        key={item}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.93 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <div className="footer_social_links">
              <h1>Payment powered by</h1>
              <div className="social_link">
                <img src="./Esewa.webp" alt="" />
                <img src="./Khalti.jpg" alt="" />
              </div>
            </div>
          </div>
          <span>
            <p>Copyright ©️{currentYear} Sipalaya info Tech Pvt Ltd. All Rights Reserved</p>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;

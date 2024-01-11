import React from "react";
import Mac from "./Three/Mac";
import "./Intro.scss";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Animation from "./Animation - 1702810226535.json";
import Button from "../../Components/Button";
const Intro = () => {
  return (
    <>
      <div className="Home_frist_page">
        <div className="Home_text_wrapper">
          <h1>Learn What Matters</h1>
          <p>
            Confused on which course to take? Sipalaya have got you covered.
            Explore our diverse courses, featuring expert-led instruction in programming, design, and marketing. We simplify the basics and coding techniques for beginners, offering both online and physical classes for a swift learning experience. Plus, Sipalaya provides paid internships after completing a course, ensuring your success.
          </p>
          <span className="Home_but">
            {/* <Link to="course">
              <Button text="Explore Courses →" />
            </Link> */}
            <Link className="AdminHome_button" to="admission">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Admission Now</span>
              </button>
            </Link>
          </span>
        </div>
        <div className="mobile_display">
          <Lottie className="imagee" animationData={Animation} />
        </div>
        <div className="home_wrapper">
          <Mac />
        </div>
      </div>
    </>
  );
};

export default Intro;

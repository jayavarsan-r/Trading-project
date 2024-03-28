import React from "react";
import profile from "../assets/Profile.png";
import { useSpring, animated } from "@react-spring/web";


function Heading() {

  const animation = useSpring({
    from: { opacity: 0, tranform: 'translateY(50px)'},
    to: { opacity: 1, tranform: 'translateY(0)'},
    delay: 1000,
    config: { duration: 1000 }
  })

  return (
    <>
      <div className="container">
        <div className="content">
          <h1>
            UNLOCK THE POWER
            <br /> OF TRADING AS A <br />
            <span className="highlight">
              PROFITABLE
              <br /> INCOME SOURCE
            </span>
          </h1>
          <p>
            CEO of <span className="highlight">Tennage Traders</span>
            <br /> Tamilnadu's #1 comprehensive trading
            <br /> community
          </p>
          <p>
            A <span className="highlight">beginner friendly</span> guide on how
            <br /> as a{" "}
            <span className="highlight">9-5 salaried professional</span>, you{" "}
            <br />6
            can establish{" "}
            <span className="highlight">
              trading as a<br /> profitable side hustle
            </span>
          </p>
          <button id="read-more">Read More</button>
        </div>
        <animated.div style={animation} className="CEO">
          <img src={profile} alt="" />
        </animated.div>
      </div>
    </>
  );
}

export default Heading;
